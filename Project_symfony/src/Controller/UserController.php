<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use PhpParser\Node\Scalar\MagicConst\Dir;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/user')]
class UserController extends AbstractController
{
    #[Route('/testuser', name: 'app_user_index', methods: ['GET'])]
    /*public function index(UserRepository $userRepository): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }*/

    #[Route('/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, UserRepository $userRepository): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setCreatedAt(new DateTimeImmutable());

            $userRepository->add($user, true);

            return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);


            return $this->renderForm('user/new.html.twig', [
                'user' => $user,
                'form' => $form,
            ]);
        }
    }

    #[Route('/', name: 'app_user_show', methods: ['GET'])]
    public function show(): Response
    {
        $user = $this->getUser();
        return $this->render('user/show.html.twig', [
            'user' => $user,
            'amis' => $this->getUser()->getFriends(),
            
        ]);
    }

    #[Route('/details/{id}', name: 'app_user_details', methods: ['GET'])]
    public function details(User $user): Response
    {
        $test = $this->getUser();
        if($user->getId() == $test->getId())
        {
            return $this->redirectToRoute('app_home');
        }

        $tabFriends = [];
        foreach($this->getUser()->getFriends() as $row){
            array_push($tabFriends, $row->getId());
        }
        //dd($user);
        $showButtonFriend = true;

        
        //return $this->redirectToRoute('app_user_details', ['id'=>$user->getId()], Response::HTTP_SEE_OTHER);

        //return $this->redirectToRoute('app_match');

        if(in_array($user->getId(), $tabFriends)){
            $showButtonFriend = false;
        }


        return $this->render('user/detail_user.html.twig', [
            'id' => $user->getId(),
            'myId' => $this->getUser()->getId(),
            'user' => $user,
            'showButtonFriend' => $showButtonFriend,
            'amis' => $this->getUser()->getFriends(),
        ]);
    }

    #[Route('/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, UserRepository $userRepository, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $pictureFile = $form->get('Picture')->getData();

            if ($pictureFile) {
                $originalFilename = pathinfo($pictureFile->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $pictureFile->guessExtension();

                try {
                    $pictureFile->move(
                        "./data/",
                        $newFilename
                    );
                } catch (FileException $e) {
                }

                $user->setPicture($newFilename);
            }
            $userRepository->add($user, true);

            return $this->redirectToRoute('app_user_show', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $userRepository->remove($user, true);
        }

        return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/add_friends/{id}', name: 'app_add_friends')]
    public function friendRequest(User $user, UserRepository $userRepository): Response
    {
        $myUser = $this->getUser();
        $myUser->addFriend($user);
        $userRepository->add($myUser, true);
        

        return $this->redirectToRoute('app_user_details', ['id'=>$user->getId()], Response::HTTP_SEE_OTHER);
    }

    #[Route('/add_friends2/{id}', name: 'app_add_friends2')]
    public function friendRequest2(User $user, UserRepository $userRepository): Response
    {
        $myUser = $this->getUser();
        $myUser->addFriend($user);
        $userRepository->add($myUser, true);
        

        return $this->redirectToRoute('app_match');
    }

    #[Route('/remove_friends/{id}', name: 'app_remove_friends')]
    public function removeFriend(User $user, UserRepository $userRepository): Response
    {
        $myUser = $this->getUser();
        $myUser->removeFriend($user);
        $userRepository->add($myUser, true);
        

        //return $this->redirectToRoute('app_user_details', ['id'=>$user->getId()], Response::HTTP_SEE_OTHER);
        return $this->redirectToRoute('app_match');
    }
}
