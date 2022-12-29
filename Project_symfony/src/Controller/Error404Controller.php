<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Error404Controller extends AbstractController
{
    #[Route('/error404', name: 'app_error404')]
    public function index(): Response
    {
        return $this->render('error404/index.html.twig', [
            'controller_name' => 'Error404Controller',
        ]);
    }
}
