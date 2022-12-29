<?php

namespace App\Controller;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MatchController extends AbstractController
{
    #[Route('/dashboard', name: 'app_match')]
    public function index(UserRepository $userRepository): Response
    {           
        //Recup du user connecte
        $myInformation = $this->getUser();
        //dd($getUserInfo);

        //recupperer la liste de tous les users
        $getAllUser = $userRepository->findAll();
        //dd($getAllUser);


        $tabMyIdForm = [];
        $tabMyOthersUser = [];

        //dd($myInformation->getActivities());

            $tabMyIdForm['minAge'] = $myInformation->getMatchAgeMin();
            $tabMyIdForm['maxAge'] = $myInformation->getMatchAgeMax();
            $tabMyIdForm['langue'] = $myInformation->getMatchLangue();
            $tabMyIdForm['politique'] = $myInformation->isMatchPolitique();
            $tabMyIdForm['breakTheIce'] = $myInformation->getMatchBreakTheIce();
            $tabMyIdForm['perfectAfterNoon'] = $myInformation->getMatchPerfectAfternoon();
            $tabMyIdForm['activity'] = explode(',', $myInformation->getActivities());
            $tabMyIdForm['interest'] = explode(',', $myInformation->getInterets());

        //dd($tabMyIdForm);

        foreach($getAllUser as $formOtherUser){

            $increment = 0;
            
            if($formOtherUser->getId() != $myInformation->getId() && $formOtherUser->isIsExpat() != $myInformation->isIsExpat()){
   
                    $tabMyOthersUser[$formOtherUser->getId()]['id'] = $formOtherUser->getId();
                    $tabMyOthersUser[$formOtherUser->getId()]['firstName'] = $formOtherUser->getFirstName();
                    $tabMyOthersUser[$formOtherUser->getId()]['city'] = $formOtherUser->getCity();
                    $tabMyOthersUser[$formOtherUser->getId()]['country'] = $formOtherUser->getCountry();
                    $tabMyOthersUser[$formOtherUser->getId()]['Picture'] = $formOtherUser->getPicture();
                    $tabMyOthersUser[$formOtherUser->getId()]['Biography'] = $formOtherUser->getBiography();
                    $tabMyOthersUser[$formOtherUser->getId()]['activitieUsers'] = $formOtherUser->getActivitieUsers();
                    $tabMyOthersUser[$formOtherUser->getId()]['language'] = $formOtherUser->getLanguage();
                    $tabMyOthersUser[$formOtherUser->getId()]['language2'] = $formOtherUser->getLanguage2();
                    $tabMyOthersUser[$formOtherUser->getId()]['minAge'] = $formOtherUser->getMatchAgeMin();
                    $tabMyOthersUser[$formOtherUser->getId()]['maxAge'] = $formOtherUser->getMatchAgeMax();
                    $tabMyOthersUser[$formOtherUser->getId()]['langue'] = $formOtherUser->getMatchLangue();
                    $tabMyOthersUser[$formOtherUser->getId()]['politique'] = $formOtherUser->isMatchPolitique();
                    $tabMyOthersUser[$formOtherUser->getId()]['breakTheIce'] = $formOtherUser->getMatchBreakTheIce();
                    $tabMyOthersUser[$formOtherUser->getId()]['perfectAfterNoon'] = $formOtherUser->getMatchPerfectAfternoon();
                    $tabMyOthersUser[$formOtherUser->getId()]['activity'] = explode(',', $formOtherUser->getActivities());
                    $tabMyOthersUser[$formOtherUser->getId()]['interest'] = explode(',', $formOtherUser->getInterets());
                    
                    /* $incrementTotal = 0; */
                    foreach($tabMyOthersUser[$formOtherUser->getId()]['activity'] as $row){
                        if($row != "" && in_array($row, $tabMyIdForm['activity'])){
                            $increment++;
                        }
                    }

                    foreach($tabMyOthersUser[$formOtherUser->getId()]['interest'] as $row){
                        if($row != "" && in_array($row, $tabMyIdForm['interest'])){
                            $increment++;
                        }
                    }

                    if($tabMyOthersUser[$formOtherUser->getId()]['langue'] == $tabMyIdForm['langue']){
                        $increment++;
                    }

                    if($tabMyOthersUser[$formOtherUser->getId()]['politique'] == $tabMyIdForm['politique']){
                        $increment++;
                    }

                    if($tabMyOthersUser[$formOtherUser->getId()]['breakTheIce'] == $tabMyIdForm['breakTheIce']){
                        $increment++;
                    }

                    if($tabMyOthersUser[$formOtherUser->getId()]['perfectAfterNoon'] == $tabMyIdForm['perfectAfterNoon']){
                        $increment++;
                    }

                    if($tabMyOthersUser[$formOtherUser->getId()]['minAge'] >= $tabMyIdForm['minAge']  && $tabMyOthersUser[$formOtherUser->getId()]['maxAge'] <= $tabMyIdForm['maxAge']  ){
                        $increment++;
                    }
                    
                    //dd($tabMyOthersUser);
                    $tabMyOthersUser[$formOtherUser->getId()]['match']= $increment;
            }            
        }
        uasort($tabMyOthersUser, function($a, $b) {return $a['match'] < $b['match'];});


        // Result all matchs
        //dd($tabMyOthersUser);

        //Valeur total des match
        //dd($tabMyOthersUser[$formOtherUser->getId()]['match']);

        //Function Pour la pourcentage de MATCH
        foreach($tabMyOthersUser as $row){

            //Valeur des interets UTILISATEUR connected
            $valeurUserIteres = count($tabMyIdForm['activity']) + count($tabMyIdForm['interest']) + 5;
            //dd($tabMyIdForm);
            
            //Valeur de la première comparaison du match
            $valeurUserMatch = $tabMyOthersUser[$row['id']]['match'];


            $tabMyOthersUser[$row['id']]['pourcent'] = ($valeurUserMatch / $valeurUserIteres) * 100;
        }

        //Afiche la pourcentage des match
        //dump($tabMyOthersUser);

        $showButtonFriend = false;
        $tabFriendId = [];
        $tabRefusedId = [];
        foreach($this->getUser()->getFriends() as $row){
            $showButtonFriend = true;
            $tabFriendId[] = $row->getId();
            $tabRefusedId[] = $row->getId();
        }
        //dd($pourcentageUtilisateur);



        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'MatchController',
            'infoMatch' => $tabMyOthersUser,
            'showButtonFriend' => $showButtonFriend,
            'amis' => $this->getUser()->getFriends(),
            'tabFriendId' => $tabFriendId
        ]);
    }

    #[Route('/saveunmatch/{id}', name: 'app_messenger_save_unmatch', methods: ['GET'])]
    public function saveMessage($id, UserRepository $userRepository)
    {
        $user = $this->getUser();
        $tabIdUnmatch = explode(',', $user->getIsValid());
        $tabIdUnmatch[] = $id;

        $user->setIsValid(implode(',', $tabIdUnmatch));

        $userRepository->add($user, true);

        return $this->redirectToRoute('app_match', [], Response::HTTP_SEE_OTHER);

    }
}
