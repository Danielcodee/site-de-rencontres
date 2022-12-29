<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;



class RegistrationStep14 extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('match_break_the_ice',ChoiceType::class, ['multiple' => false, 'expanded' => true, 'choices'=>['Poser une question '=> 'Poser une question ', 'Raconte une blague '=> 'Raconte une blague ','Mentionner quelque chose sur mon profil '=> 'Mentionner quelque chose sur mon profil ','Se présenter de manière simple '=> 'Se présenter de manière simple ']]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
