<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;


class RegistrationStep11 extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('match_genre', ChoiceType::class, ['multiple' => false, 'expanded' => true, 'choices'=>['Femme'=> 'Femme', 'Homme'=> 'Homme','Agenre'=> 'Agenre','Bigenre'=> 'Bigenre', 'Genre Fluide'=> 'Genre Fluide', 'Genderqueer'=> 'Genderqueer', 'Genre non conforme'=> 'Genre non conforme', 'Intersexe'=> 'Intersexe', 'Non binaire'=> 'Non binaire', 'Autre'=> 'Autre', 'Pangenre'=> 'Pangenre','Transféminin'=> 'Transféminin', 'Transgenre'=>'Transgenre', 'Hommes trans' => 'Hommes trans', 'Transmaculin' => 'Transmaculin', 'Transsexuel' => 'Transsexuel', 'Femme trans' => 'Femme trans']]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
