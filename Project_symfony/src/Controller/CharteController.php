<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CharteController extends AbstractController
{
    #[Route('/charte', name: 'app_charte')]
    public function index(): Response
    {
        return $this->render('charte/index.html.twig', [
            'controller_name' => 'CharteController',
            'amis' => $this->getUser()->getFriends()
        ]);
    }

    #[Route('/charte-non-connect', name: 'app_charte-non-connect')]
    public function index2(): Response
    {
        return $this->render('charte/index2.html.twig', [
            'controller_name' => 'CharteController',
        ]);
    }
}
