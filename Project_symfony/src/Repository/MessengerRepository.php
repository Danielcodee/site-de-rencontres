<?php

namespace App\Repository;

use App\Entity\Messenger;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Messenger>
 *
 * @method Messenger|null find($id, $lockMode = null, $lockVersion = null)
 * @method Messenger|null findOneBy(array $criteria, array $orderBy = null)
 * @method Messenger[]    findAll()
 * @method Messenger[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessengerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Messenger::class);
    }

    public function add(Messenger $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Messenger $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getConversation($idSender, $idReceiver){
        return $this->createQueryBuilder('m')
            ->where('(m.sender = :val AND m.receiver = :val2)')
            ->orWhere('(m.sender = :val2 AND m.receiver = :val)')
            ->setParameter('val', $idSender)
            ->setParameter('val2', $idReceiver)
            ->orderBy('m.sentAt', 'ASC')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return Messenger[] Returns an array of Messenger objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Messenger
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
