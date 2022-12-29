<?php

namespace App\Form;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationStep6 extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('city',ChoiceType::class,['choices'=>['Paris'=> 'Paris', 'Marseille'=> 'Marseille', 'Toulouse'=> 'Toulouse', 'Nice'=> 'Nice', 'Nantes'=> 'Nantes', 'Montpellier'=> 'Montpellier', 'Strasbourg'=> 'Strasbourg', 'Bordeaux'=> 'Bordeaux', 'Lille'=> 'Lille']]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
