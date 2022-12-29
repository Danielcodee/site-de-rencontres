<?php

namespace App\Entity;

use App\Repository\ActivitieUserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ActivitieUserRepository::class)]
class ActivitieUser
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'activitieUsers', cascade:["persist"])]
    private ?Activitie $activitie = null;

    #[ORM\ManyToOne(inversedBy: 'activitieUsers')]
    private ?User $user = null;

    #[ORM\Column]
    private ?bool $isActivitie = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActivitie(): ?Activitie
    {
        return $this->activitie;
    }

    public function setActivitie(?Activitie $activitie): self
    {
        $this->activitie = $activitie;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function isIsActivitie(): ?bool
    {
        return $this->isActivitie;
    }

    public function setIsActivitie(bool $isActivitie): self
    {
        $this->isActivitie = $isActivitie;

        return $this;
    }

    public function __toString()
    {
        return $this->activitie.' '.$this->user;
    }
}
