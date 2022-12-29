<?php

namespace App\Controller;


use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Form\RegistrationStep2;
use App\Form\RegistrationStep3;
use App\Form\RegistrationStep4;
use App\Form\RegistrationStep5;
use App\Form\RegistrationStep6;
use App\Form\RegistrationStep7;
use App\Form\RegistrationStep8;
use App\Form\RegistrationStep9;
use App\Form\RegistrationStep10;
use App\Form\RegistrationStep11;
use App\Form\RegistrationStep12;
use App\Form\RegistrationStep13;
use App\Form\RegistrationStep14;
use App\Form\RegistrationStep15;
use App\Form\RegistrationStep16;
use App\Form\RegistrationStep17;
use App\Form\RegistrationStep18;
use App\Form\RegistrationStep19;
use App\Form\RegistrationStep20;
use App\Repository\ActivitieRepository;
use App\Repository\ActivitieUserRepository;
use App\Repository\UserRepository;
use App\Security\AppAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class RegistrationController extends AbstractController
{ //Route to creation compte EMAIL
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, RequestStack $requestStack, UserAuthenticatorInterface $userAuthenticator, AppAuthenticator $authenticator, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $session = $requestStack->getSession();
            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_register_step2', [], Response::HTTP_SEE_OTHER);

        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
    //Route to creation compte step2 Password
    #[Route('/step2', name: 'app_register_step2')]
    public function step2(Request $request, RequestStack $requestStack, UserPasswordHasherInterface $userPasswordHasher): Response
    {

        $session = $requestStack->getSession();

        $user = $session->get('user');

        $form = $this->createForm(RegistrationStep2::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_register_step3', [], Response::HTTP_SEE_OTHER);
        }
        
        return $this->render('registration/step2.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
    //Route to creation compte step3 firstName/pseudo
    #[Route('/step3', name: 'app_register_step3')]
    public function step3(Request $request, RequestStack $requestStack): Response
    {

        $session = $requestStack->getSession();

        $user = $session->get('user');

        $form = $this->createForm(RegistrationStep3::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //dd($user);
            $user->setFirstName(
                    $form->get('firstName')->getData()
            );

            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_register_step4', [], Response::HTTP_SEE_OTHER);

        }
        return $this->render('registration/step3.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
        //Route to creation compte step4 date naissance
     #[Route('/step4', name: 'app_register_step4')]
    public function step4(Request $request, RequestStack $requestStack): Response
    {

        $session = $requestStack->getSession();

        $user = $session->get('user');
        $form = $this->createForm(RegistrationStep4::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //dd($user);
            $user->setBirthDate($form->get('birthDate')->getData())
            ;

            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_register_step5', [], Response::HTTP_SEE_OTHER);

        }

        return $this->render('registration/step4.html.twig', [
            'registrationForm' => $form->createView(),
        ]); 
    }
         //Route to creation compte step5 genre
    #[Route('/step5', name: 'app_register_step5')]
    public function step5(Request $request, RequestStack $requestStack): Response
    {

        $session = $requestStack->getSession();

        $user = $session->get('user');
        $form = $this->createForm(RegistrationStep5::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //dd($user);
            $user->setGenre(
                $form->get('genre')->getData())
            ;

            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_register_step6', [], Response::HTTP_SEE_OTHER);

        }

        return $this->render('registration/step5.html.twig', [
            'registrationForm' => $form->createView(),
        ]); 
    }


        //Route to creation compte step6 ou habites vous
    #[Route('/step6', name: 'app_register_step6')]
    public function step6(Request $request, RequestStack $requestStack): Response
    {

        $session = $requestStack->getSession();

        $user = $session->get('user');
        $form = $this->createForm(RegistrationStep6::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //dd($user);
            $user->setCity(
                $form->get('city')->getData())
            ;

            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_register_step16', [], Response::HTTP_SEE_OTHER);

        }

        return $this->render('registration/step6.html.twig', [
            'registrationForm' => $form->createView(),
        ]); 
    } 

    #[Route('/step16', name: 'app_register_step16')]
    public function step16(Request $request, RequestStack $requestStack): Response
    {

        $session = $requestStack->getSession();

        $user = $session->get('user');
        $form = $this->createForm(RegistrationStep16::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //dd($user);
            $user->setIsExpat(
                $form->get('isExpat')->getData())
            ;

            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_register_step7', [], Response::HTTP_SEE_OTHER);

        }
        return $this->render('registration/step16.html.twig', [
            'registrationForm' => $form->createView(),
        ]); 
    }

    //Route to creation compte step7 langue/nationalité
    #[Route('/step7', name: 'app_register_step7')]
    public function step7(Request $request, RequestStack $requestStack): Response
    {
        $session = $requestStack->getSession();
    
        $user = $session->get('user');                  
        $form = $this->createForm(RegistrationStep7::class, $user);

        if (isset($request->get('registration_step7')["language"])) {

            $language = $request->get('registration_step7')["language"];

            $tab = ['', '2', '3'];
            $i = 0;
            foreach($language as $rowLanguage){
                $user->{'setLanguage'.$tab[$i]}($rowLanguage);
                $i++;
            }

            //il faut ajouter le country sur le form
            $user->setCountry(current($request->request->all())['country']);

            $session->set('user', $user);
            
            //redirection
            return $this->redirectToRoute('app_quiz', [], Response::HTTP_SEE_OTHER);

        }

        return $this->render('registration/step7.html.twig', [
            'registrationForm' => $form->createView(),
        ]); 
    }

    #[Route('/quiz', name: 'app_quiz')]
    public function stepOne( ActivitieRepository $activitieRepository  ): Response
    {
        $form = $activitieRepository->findByStep(1);
        return $this->render('registration/step.html.twig', [
            'form' => $form,
            'step1' => true,
            'step2' => false,
            'step3' => false,
            'step4' => false
        ]);
    }

    #[Route('/quiz/step2', name: 'app_quiz_2')]
    public function stepTwo(Request $request, RequestStack $requestStack, ActivitieUserRepository $activitieUserRepository, ActivitieRepository $activitieRepository): Response
    {

        $session = $requestStack->getSession();
        $user = $session->get('user');       

        //traitement du form1 ( Recupere les choix du step 1)
        $tabActivityFalse = [];
        foreach($request->get('valueCheckbox') as $row){
            $activity = $activitieRepository->findOneById($row);

            $tabActivityFalse[] = $activity;

        }

        $session->set('user', $user);
        $session->set('activityFalse', $tabActivityFalse);


        $form = $activitieRepository->findByStep(2);
        return $this->render('registration/step.html.twig', [
            'form' => $form,
            'step2' => true,
            'step1' => false,
            'step3' => false,
            'step4' => false
        ]);
    }

    #[Route('/quiz/step3', name: 'app_quiz_3')]
    public function stepThree(Request $request, RequestStack $requestStack ,ActivitieUserRepository $activitieUserRepository, ActivitieRepository $activitieRepository): Response
    {

        $form = $activitieRepository->findByStep(3);
        return $this->render('registration/step.html.twig', [
            'form' => $form,
            'step1' => false,
            'step2' => false,
            'step3' => true,
            'step4' => false
           
        ]);
    }

    // traitement du step8 pour la foto de profil
    #[Route('/step8', name: 'app_register_step8')]
    public function step8(Request $request, RequestStack $requestStack, ActivitieRepository $activitieRepository,  SluggerInterface $slugger): Response
    {
    
        $session = $requestStack->getSession();
        $user = $session->get('user');      
        
        $tabActivityTrue = [];
        foreach($request->get('valueCheckbox') as $row){
            $activity = $activitieRepository->findOneById($row);

            $tabActivityTrue[] = $activity;
        } 

        $session->set('user', $user);
        $session->set('activityTrue', $tabActivityTrue);
    
        $user = $session->get('user');
        $form = $this->createForm(RegistrationStep8::class, $user);
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
            //$userRepository->add($user, true);
            $session->set('user', $user);

            return $this->redirectToRoute('app_register_step9', [], Response::HTTP_SEE_OTHER);
        }
    
        return $this->render('registration/step8.html.twig', [
            'registrationForm' => $form->createView(),
        ]); 
    }

            //Route to formulaire match step9 button
            #[Route('/step9', name: 'app_register_step9')]
            public function step9(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();
        
                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep9::class, $user);
                $form->handleRequest($request);
        
                if ($form->isSubmitted()) {
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step10', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step9.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            }

            //Route to formulaire match step10 Age
            #[Route('/step10', name: 'app_register_step10')]
            public function step10(Request $request, RequestStack $requestStack, UserRepository $userRepository): Response
            {
        
                $session = $requestStack->getSession();

                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep10::class, $user);
                $form->handleRequest($request);
                
                
                if ($form->isSubmitted()  && $form->isValid() ) {
                    //dd($user);
                    if($user->getMatchAgeMin() < $user->getMatchAgeMax()){
                        $user->setMatchAgeMin(
                            $form->get('match_age_min')->getData());
    
                        $user->setMatchAgeMax(
                            $form->get('match_age_max')->getData());
            
                        $session->set('user', $user);
                        
                        //redirection
                        return $this->redirectToRoute('app_register_step11', [], Response::HTTP_SEE_OTHER);
                    }
        
                }
                
                return $this->render('registration/step10.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            }
            
            //Route to formulaire match step11 genre
            #[Route('/step11', name: 'app_register_step11')]
            public function step11(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();

                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep11::class, $user);
                $form->handleRequest($request);

                if ($form->isSubmitted() && $form->isValid()) {
                    //dd($user);
                    $user->setMatchGenre(
                        $form->get('match_genre')->getData())
                    ;

                    $session->set('user', $user);
                    
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step12', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step11.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            }

            //Route to formulaire match step12 echange le langue
            #[Route('/step12', name: 'app_register_step12')]
            public function step12(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();

                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep12::class, $user);
                $form->handleRequest($request);

                if ($form->isSubmitted() && $form->isValid()) {
                    //dd($user);
                    $user->setMatchLangue(
                        $form->get('match_langue')->getData())
                    ;

                    $session->set('user', $user);
                    
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step13', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step12.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            }

                        //Route to formulaire match step12 echange le langue
            #[Route('/step13', name: 'app_register_step13')]
            public function step13(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();

                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep13::class, $user);
                $form->handleRequest($request);

                if ($form->isSubmitted() && $form->isValid()) {
                    //dd($user);
                    $user->setMatchPolitique(
                        $form->get('match_politique')->getData())
                    ;

                    $session->set('user', $user);
                    
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step14', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step13.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            }

            //Route to formulaire match step14 break the ice
            #[Route('/step14', name: 'app_register_step14')]
            public function step14(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();

                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep14::class, $user);
                $form->handleRequest($request);

                if ($form->isSubmitted() && $form->isValid()) {
                    //dd($user);
                    $user->setMatchBreakTheIce(
                        $form->get('match_break_the_ice')->getData())
                    ;

                    $session->set('user', $user);
                    
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step15', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step14.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            }

                        //Route to formulaire match step15 break the ice
            #[Route('/step15', name: 'app_register_step15')]
            public function step15(Request $request, RequestStack $requestStack, UserRepository $userRepository, EntityManagerInterface $em): Response
            {
        
                $session = $requestStack->getSession();

                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep15::class, $user);
                $form->handleRequest($request);

                if ($form->isSubmitted() && $form->isValid()) {
                    //dd($user);
                    $user->setMatchPerfectAfternoon(
                        $form->get('match_perfect_afternoon')->getData())
                    ;

                    $session->set('user', $user);
                    //dd($session);

                    // code para enviar os dados do formulario na base de dados
                    $em->persist($user);
                    

                    $tabActivityTrue = $session->get('activityTrue');
                    $stringTabActivityTrue = "";
                    foreach($tabActivityTrue as $rowActivityTrue){

                        if($stringTabActivityTrue != ""){
                            $stringTabActivityTrue .= ",";
                        }
                        $stringTabActivityTrue .= $rowActivityTrue->getId();
                    }

                    $user->setActivities($stringTabActivityTrue);

                    $tabActivityFalse = $session->get('activityFalse');
                    $stringTabActivityFalse = "";
                    foreach($tabActivityFalse as $rowActivityFalse){
                        if($stringTabActivityFalse != ""){
                            $stringTabActivityFalse .= ",";
                        }
                        $stringTabActivityFalse .= $rowActivityFalse->getId();
                        /*$activityUser = new ActivitieUser();
                        $activityUser->setActivitie($rowActivityFalse);
                        $activityUser->setUser($user);
                        $activityUser->setIsActivitie(false);
                        $em->persist($activityUser);*/
                    }
                    $user->setInterets($stringTabActivityFalse);

                    $em->flush();

                    //redirection
                    return $this->redirectToRoute('app_login', [], Response::HTTP_SEE_OTHER);
        
                }
            
                return $this->render('registration/step15.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
                $userRepository->add($user, true);
            }

            /* ROTAS SOMENTE PARA DEMOSTRACAO */

             //Route to formulaire match step9 button
             #[Route('/step17', name: 'app_register_step17')]
             public function step17(Request $request, RequestStack $requestStack): Response
             {
         
                 $session = $requestStack->getSession();
         
                 $user = $session->get('user');
                 $form = $this->createForm(RegistrationStep17::class, $user);
                 $form->handleRequest($request);
         
                 if ($form->isSubmitted()) {
                     
                     //redirection
                     return $this->redirectToRoute('app_register_step18', [], Response::HTTP_SEE_OTHER);
         
                 }
         
                 return $this->render('registration/step17.html.twig', [
                     'registrationForm' => $form->createView(),
                 ]); 
             }

              //Route to formulaire match step18 button SOMENTE PARA A DEMOSTRA9AO
             #[Route('/step18', name: 'app_register_step18')]
            public function step18(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();
        
                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep18::class, $user);
                $form->handleRequest($request);
        
                if ($form->isSubmitted()) {
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step19', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step18.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            }

            #[Route('/step19', name: 'app_register_step19')]
            public function step19(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();
        
                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep19::class, $user);
                $form->handleRequest($request);
        
                if ($form->isSubmitted()) {
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step9', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step19.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            } 

            #[Route('/step20', name: 'app_register_step20')]
            public function step20(Request $request, RequestStack $requestStack): Response
            {
        
                $session = $requestStack->getSession();
        
                $user = $session->get('user');
                $form = $this->createForm(RegistrationStep20::class, $user);
                $form->handleRequest($request);
        
                if ($form->isSubmitted()) {
                    
                    //redirection
                    return $this->redirectToRoute('app_register_step9', [], Response::HTTP_SEE_OTHER);
        
                }
        
                return $this->render('registration/step20.html.twig', [
                    'registrationForm' => $form->createView(),
                ]); 
            } 
}