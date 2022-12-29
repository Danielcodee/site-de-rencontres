<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MentionsLegalesController extends AbstractController
{
    #[Route('/mentions/legales', name: 'app_mentions_legales')]
    public function index(): Response
    {
        return $this->render('mentions_legales/index.html.twig', [
            'controller_name' => 'MentionsLegalesController',
            'amis' => $this->getUser()->getFriends()
        ]);
    }

    #[Route('/mentions/legales/non/connect', name: 'app_mentions-legales_non_connect')]
    public function index2(): Response
    {
        return $this->render('mentions_legales/index2.html.twig', [
            'controller_name' => 'MentionsLegalesController',
        ]);
    }
}
