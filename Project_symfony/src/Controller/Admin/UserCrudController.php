<?php

namespace App\Controller\Admin;

use App\Entity\User;
use DateTime;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\LanguageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;


class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            EmailField::new('email'),
            TextField::new('firstName'),
            TextField::new('lastName'),
            TextField::new('password'),
            DateTimeField::new('created_at'),
            ChoiceField::new('city')->setChoices([
                'Paris' => 'Paris',
                'Marseille' => 'Marseille',
                'Toulouse' => 'Toulouse',
                'Nice' => 'Nice',
                'Nantes' => 'Nantes',
                'Montpellier' => 'Montpellier',
                'Strasbourg' => 'Strasbourg',
                'Lille' => 'Lille',
            ]),
            ChoiceField::new('country')->setChoices(['Afghanistan'=> 'Afghanistan', 'Îles Åland'=> 'Îles Åland','Algérie'=> 'Algérie','Angola'=> 'Angola', 'Argentine'=> 'Argentine', 'Arménie'=> 'Arménie', 'Australie'=> 'Australie', 'Bahamas'=> 'Bahamas', 'Bangladesh'=> 'Bangladesh', 'Biélorussie'=> 'Biélorussie', 'Belgique'=> 'Belgique','Bolivie'=> 'Bolivie', 'Brazil'=>'Brazil', 'Bulgarie' => 'Bulgarie','Cambodge'=> 'Cambodge', 'Cameroun'=> 'Cameroun','Canada'=> 'Canada','Cap-Vert'=> 'ap-Vert', 'Iles Cayman'=> 'Iles Cayman', 'Chili'=> 'Chili', 'Chine'=> 'Chine', 'Hong Kong'=> 'Hong', 'Colombie'=> 'Colombie', 'Comores'=> 'Comores', 'République du Congo'=> 'République du Congo','Costa Rica'=> 'Costa Rica', 'Côte d’Ivoire'=>'Côte d’Ivoire', 'Croatie' => 'Croatie', 'Cuba'=> 'Cuba', 'République tchèque'=> 'République tchèque','Danemark'=> 'Danemark','République dominicaine'=> 'République dominicaine', 'Équateur'=> 'Équateur', 'Égypte'=> 'Égypte', 'Salvador'=> 'Salvador', 'Estonie'=> 'Estonie', 'Éthiopie'=> 'Éthiopie', 'Fidji'=> 'Fidji', 'Finlande'=> 'Finlande','France'=> 'France', 'Guyane française'=>'Guyane française', 'Polynésie française' => 'Polynésie française','Géorgie'=> 'Géorgie', 'Allemagne'=> 'Allemagne','Grèce'=> 'Grèce','Groenland'=> 'Groenland', 'Guadeloupe'=> 'Guadeloupe', 'Guatemala'=> 'Guatemala', 'Haïti'=> 'Haïti', 'Honduras'=> 'Honduras', 'Hongrie'=> 'Hongrie', 'Islande'=> 'Islande', 'Inde'=> 'Inde','Indonésie'=> 'Indonésie', 'Iran'=>'Iran', 'Irak' => 'Irak', 'Israël'=> 'Israël', 'Italie'=> 'Italie', 'Jamaïque'=> 'Jamaïque','Japon'=> 'Japon', 'Jordanie'=> 'Jordanie', 'Corée du Nord'=> 'Corée du Nord', 'Corée du Sud'=> 'Corée du Sud', 'Liban'=> 'Liban', 'Lituanie'=> 'Lituanie', 'Luxembourg'=> 'Luxembourg', 'Madagascar'=> 'Madagascar','Maldives'=> 'Maldives', 'Martinique'=>'Martinique', 'Mexique' => 'Mexique','Monaco'=> 'Monaco', 'Mongolie'=> 'Mongolie','Mozambique'=> 'Mozambique','Pays-Bas'=> 'Pays-Bas', 'Nigeria'=> 'Nigeria', 'Norvège'=> 'Norvège', 'Pakistan'=> 'Pakistan', 'Palestine'=> 'Palestine', 'Panama'=> 'Panama', 'Paraguay'=> 'Paraguay', 'Pérou'=> 'Pérou','Pologne'=> 'Pologne', 'Portugal'=>'Portugal', 'Roumanie' => 'Roumanie', 'Russie'=> 'Russie', 'Arabie Saoudite'=> 'Arabie Saoudite','Sénégal'=> 'Sénégal','Serbie'=> 'Serbie', 'Singapour'=> 'Singapour', 'Égypte'=> 'Égypte', 'Salvador'=> 'Salvador', 'Estonie'=> 'Estonie', 'Éthiopie'=> 'Éthiopie', 'Fidji'=> 'Fidji', 'Finlande'=> 'Finlande','France'=> 'France', 'Guyane française'=>'Guyane française', 'Polynésie Slovaquie' => 'Polynésie Slovaquie','Afrique du Sud'=> 'Afrique du Sud', 'Espagne'=> 'Espagne','Sri Lanka'=> 'Sri Lanka','Suède'=> 'Suède', 'Suisse'=> 'Suisse', 'Taiwan'=> 'Taiwan', 'Thaïlande'=> 'Thaïlande', 'Tunisie'=> 'Tunisie', 'Turquie'=> 'Turquie', 'Ukraine'=> 'Ukraine', 'États-Unis'=> 'États-Unis','Royaume-Uni'=> 'Royaume-Uni', 'Uruguay'=>'Uruguay', 'Venezuela' => 'Venezuela', 'Viêt Nam'=> 'Viêt Nam','Sahara occidental'=> 'Sahara occidental', 'Zambie'=>'Zambie', 'Zimbabwe' => 'Zimbabwe']),
            ChoiceField::new('language')->setChoices([
                'Francais' => 'Francais',
                'Anglais' => 'Anglais',
                'Portugais' => 'Portugais',
                'Japonais' => 'Japonais',
                'Italien' => 'Italien',
                'Russe' => 'Russe',
                'Allemand' => 'Allemand',
                'Irlandais' => 'Irlandais',
                'Créole haïtien' => 'Créole haïtien',
                'Arménien' => 'Arménien',
                'Coréen' => 'Coréen',
                'Polonais' => 'Polonais',
                'Suédois' => 'Suédois',
                'Corse' => 'Corse',
                'Écossais' => 'Écossais',
                'Slovaque' => 'Slovaque',
                'Ukrainien' => 'Ukrainien',
            ]),
            ChoiceField::new('language2')->setChoices([
                'Francais' => 'Francais',
                'Anglais' => 'Anglais',
                'Portugais' => 'Portugais',
                'Japonais' => 'Japonais',
                'Italien' => 'Italien',
                'Russe' => 'Russe',
                'Allemand' => 'Allemand',
                'Irlandais' => 'Irlandais',
                'Créole haïtien' => 'Créole haïtien',
                'Arménien' => 'Arménien',
                'Coréen' => 'Coréen',
                'Polonais' => 'Polonais',
                'Suédois' => 'Suédois',
                'Corse' => 'Corse',
                'Écossais' => 'Écossais',
                'Slovaque' => 'Slovaque',
                'Ukrainien' => 'Ukrainien',
            ]),
            ChoiceField::new('language3')->setChoices([
                'Francais' => 'Francais',
                'Anglais' => 'Anglais',
                'Portugais' => 'Portugais',
                'Japonais' => 'Japonais',
                'Italien' => 'Italien',
                'Russe' => 'Russe',
                'Allemand' => 'Allemand',
                'Irlandais' => 'Irlandais',
                'Créole haïtien' => 'Créole haïtien',
                'Arménien' => 'Arménien',
                'Coréen' => 'Coréen',
                'Polonais' => 'Polonais',
                'Suédois' => 'Suédois',
                'Corse' => 'Corse',
                'Écossais' => 'Écossais',
                'Slovaque' => 'Slovaque',
                'Ukrainien' => 'Ukrainien',
            ]),
            //LanguageField::new('language')->useAlpha3Codes(),
            //LanguageField::new('language2')->useAlpha3Codes(),
            //LanguageField::new('language3')->useAlpha3Codes(),
            BooleanField::new('is_expat')->renderAsSwitch(false),
            TextEditorField::new('biography')->setNumOfRows(15),
            ChoiceField::new('roles')->setChoices([
                'Utilisateur' => 'ROLE_USER',
                'Moderateur' => 'ROLE_MODERATOR',
                'Administrateur' => 'ROLE_ADMINISTRATOR'
            ])->allowMultipleChoices()
        ];
    }
    
}
