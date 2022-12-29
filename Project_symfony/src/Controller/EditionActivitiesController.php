<?php

namespace App\Controller;

use App\Entity\ActivitieUser;
use App\Form\UserType;
use App\Repository\ActivitieRepository;
use App\Repository\ActivitieUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EditionActivitiesController extends AbstractController
{
    #[Route('/edition/activities', name: 'app_edition_activities')]
    public function index(ActivitieRepository $activitieRepository, ActivitieUserRepository $activitieUserRepository): Response
    {
        
        return $this->render('edition_activities/index.html.twig', [
            'controller_name' => 'EditionActivitiesController',
            'edit_activities' => $activitieRepository->findAll(),
            'edit_user_activities' => $activitieUserRepository->findAll()
        ]);

    }


    // Function pour envoie le result de edition des activites 
    #[Route('/saveactivity', name: 'app_save_activity', methods: ['POST'])]
    public function saveActivityByUser(Request $request, ActivitieRepository $activitieRepository, EntityManagerInterface $em): JsonResponse
    {
        foreach(json_decode($request->getContent())->data as $key => $val){

            $activity = $activitieRepository->findOneById($val);

            $userActivity = new ActivitieUser();
            $userActivity->setActivitie($activity);
            $userActivity->setUser($this->getUser());
            $userActivity->setIsActivitie(true);

            $em->persist($userActivity);
        }
        $em->flush();

        return new JsonResponse(['result' => 'ok']);
    }

        // Function pour envoie le result de edition des activites 
        #[Route('/saveinterets', name: 'app_save_interets', methods: ['POST'])]
        public function saveInteretsByUser(Request $request, ActivitieRepository $activitieRepository, EntityManagerInterface $em): JsonResponse
        {
            foreach(json_decode($request->getContent())->data as $key => $val){
    
                $activity = $activitieRepository->findOneById($val);
    
                $userInterets = new ActivitieUser();
                $userInterets->setActivitie($activity);
                $userInterets->setUser($this->getUser());
                $userInterets->setIsActivitie(false);
    
                $em->persist($userInterets);
            }
            $em->flush();
            
            return new JsonResponse(['result' => 'ok']);
        }
    
}
