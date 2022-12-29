<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220907093818 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE messenger ADD sender_id INT NOT NULL, ADD receiver_id INT NOT NULL');
        $this->addSql('ALTER TABLE messenger ADD CONSTRAINT FK_E22A4301F624B39D FOREIGN KEY (sender_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE messenger ADD CONSTRAINT FK_E22A4301CD53EDB6 FOREIGN KEY (receiver_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_E22A4301F624B39D ON messenger (sender_id)');
        $this->addSql('CREATE INDEX IDX_E22A4301CD53EDB6 ON messenger (receiver_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE messenger DROP FOREIGN KEY FK_E22A4301F624B39D');
        $this->addSql('ALTER TABLE messenger DROP FOREIGN KEY FK_E22A4301CD53EDB6');
        $this->addSql('DROP INDEX IDX_E22A4301F624B39D ON messenger');
        $this->addSql('DROP INDEX IDX_E22A4301CD53EDB6 ON messenger');
        $this->addSql('ALTER TABLE messenger DROP sender_id, DROP receiver_id');
    }
}
