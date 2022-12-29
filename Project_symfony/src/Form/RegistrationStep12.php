<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;


class RegistrationStep12 extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('match_langue',ChoiceType::class, ['choices' => ['Francais'=> 'Francais', 'Anglais'=> 'Anglais','Portugais'=> 'Portugais','Japonais'=> 'Japonais', 'Espagnol'=> 'Espagnol', 'Italien'=> 'Italien', 'Russe'=> 'Russe', 'Allemand'=> 'Allemand', 'Irlandais'=> 'Irlandais', 'Créole haïtien'=> 'Créole haïtien', 'Arménien'=> 'Arménien','Coréen'=> 'Coréen', 'Polonais'=>'Polonais', 'Suédois' => 'Suédois', 'Corse' => 'Corse', 'Écossais' => 'Écossais', 'Nederlands' => 'Nederlands', 'Slovaque' => 'Slovaque', 'Ukrainien' => 'Ukrainien']]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
