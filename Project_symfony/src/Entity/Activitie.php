<?php

namespace App\Entity;

use App\Repository\ActivitieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ActivitieRepository::class)]
class Activitie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;


    #[ORM\OneToMany(mappedBy: 'activitie', targetEntity: ActivitieUser::class)]
    private Collection $activitieUsers;

    #[ORM\Column(nullable: true)]
    private ?int $step = null;

    public function __construct()
    {
        $this->User = new ArrayCollection();
        $this->activitieUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }


    /**
     * @return Collection<int, ActivitieUser>
     */
    public function getActivitieUsers(): Collection
    {
        return $this->activitieUsers;
    }

    public function addActivitieUser(ActivitieUser $activitieUser): self
    {
        if (!$this->activitieUsers->contains($activitieUser)) {
            $this->activitieUsers->add($activitieUser);
            $activitieUser->setActivitie($this);
        }

        return $this;
    }

    public function removeActivitieUser(ActivitieUser $activitieUser): self
    {
        if ($this->activitieUsers->removeElement($activitieUser)) {
            // set the owning side to null (unless already changed)
            if ($activitieUser->getActivitie() === $this) {
                $activitieUser->setActivitie(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name.' '.$this->image;
    }

    public function getStep(): ?int
    {
        return $this->step;
    }

    public function setStep(?int $step): self
    {
        $this->step = $step;

        return $this;
    }
}
