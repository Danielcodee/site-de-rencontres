<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/dashbazeoard', name: 'app_dashboard')]
    public function index(): Response
    {
        $showButtonFriend = false;
        foreach($this->getUser()->getFriends() as $row){
            $showButtonFriend = true;
        }

        return $this->render('dashboard/index.html.twig', [
            'showButtonFriend' => $showButtonFriend,
            'amis' => $this->getUser()->getFriends()
        ]);

    }

}
