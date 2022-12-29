<?php

namespace App\Entity;

use App\Repository\ReviewRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $comment = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $date_at = null;

    #[ORM\ManyToOne(inversedBy: 'review_sender')]
    private ?User $sender_id = null;

    #[ORM\ManyToOne(inversedBy: 'review_received')]
    private ?User $received_id = null;


    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->sender_id = new ArrayCollection();
        $this->received_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getDateAt(): ?\DateTimeImmutable
    {
        return $this->date_at;
    }

    public function setDateAt(\DateTimeImmutable $date_at): self
    {
        $this->date_at = $date_at;

        return $this;
    }

    public function getSenderId(): ?User
    {
        return $this->sender_id;
    }

    public function setSenderId(?User $sender_id): self
    {
        $this->sender_id = $sender_id;

        return $this;
    }

    public function getReceivedId(): ?User
    {
        return $this->received_id;
    }

    public function setReceivedId(?User $received_id): self
    {
        $this->received_id = $received_id;

        return $this;
    }
  
}
