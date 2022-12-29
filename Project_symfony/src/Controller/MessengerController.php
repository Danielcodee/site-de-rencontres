<?php

namespace App\Controller;

use App\Entity\Messenger;
use App\Entity\User;
use App\Form\MessengerType;
use App\Repository\MessengerRepository;
use App\Repository\UserRepository;
use DateTimeImmutable;
use Doctrine\DBAL\Types\DateImmutableType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/messenger')]
class MessengerController extends AbstractController
{
    #[Route('/', name: 'app_messenger_index', methods: ['GET'])]
    public function index(MessengerRepository $messengerRepository): Response
    {
        return $this->render('messenger/index.html.twig', [
            'messengers' => $messengerRepository->findAll(),
        ]);
    }

    #[Route('/new/{id}', name: 'app_messenger_new', methods: ['GET', 'POST'])]
    public function new($id, UserRepository $userRepository,Request $request, MessengerRepository $messengerRepository): Response
    {
        $messenger = new Messenger();
        $form = $this->createForm(MessengerType::class, $messenger);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
                $sender = $userRepository->findOneById(1) ;
                $receiver = $userRepository->findOneById(2);
                $messenger->setSender($sender);
                $messenger->setReceiver($receiver);
                $messenger->setSentAt(new DateTimeImmutable());
                $messenger->setReceivedAt(new DateTimeImmutable());
                $messengerRepository->add($messenger, true);

            return $this->redirectToRoute('app_messenger_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('messenger/new.html.twig', [
            //myId correspond à la personne qui est connecteé sur sa session
            //id correspond à la personne à laquelle tu veux envoyer un message
            'id' => $id,
            'myId' => $this->getUser()->getId(),
            'messenger' => $messenger,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_messenger_show', methods: ['GET'])]
    public function show(Messenger $messenger): Response
    {
        return $this->render('messenger/show.html.twig', [
            'messenger' => $messenger,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_messenger_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Messenger $messenger, MessengerRepository $messengerRepository): Response
    {
        $form = $this->createForm(MessengerType::class, $messenger);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $messengerRepository->add($messenger, true);

            return $this->redirectToRoute('app_messenger_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('messenger/edit.html.twig', [
            'messenger' => $messenger,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_messenger_delete', methods: ['POST'])]
    public function delete(Request $request, Messenger $messenger, MessengerRepository $messengerRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$messenger->getId(), $request->request->get('_token'))) {
            $messengerRepository->remove($messenger, true);
        }

        return $this->redirectToRoute('app_messenger_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/listmessage/{idSender}/{idReceiver}', name: 'app_messenger_list_message', methods: ['GET'])]
    public function list_message($idSender, $idReceiver, MessengerRepository $messengerRepository): Response
    {
        $messengerData = $messengerRepository->getConversation($idSender, $idReceiver);

        return $this->renderForm('messenger/list_message.html.twig', [
            "messengerData" => $messengerData
        ]);
    }

    #[Route('/save/{id}', name: 'app_messenger_save', methods: ['POST'])]
    public function saveMessage($id, Request $request, MessengerRepository $messengerRepository, UserRepository $userRepository): JsonResponse
    {
        $content = $request->getContent();
        $idReceiver = json_decode($content)->idReceiver;
        $message = json_decode($content)->message;

        $userReceiver = $userRepository->findOneById($idReceiver);

        $messager = new Messenger();
        $messager->setText($message);
        $messager->setSender($this->getUser());
        $messager->setReceiver($userReceiver);
        $messager->setSentAt(new DateTimeImmutable());
        $messager->setReceivedAt(new DateTimeImmutable());

        $messengerRepository->add($messager, true);

        return new JsonResponse(['result' => 'ok']);

    }

}
