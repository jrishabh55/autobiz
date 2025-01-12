DROP TABLE `organization_memberships`;--> statement-breakpoint
ALTER TABLE `customers` ADD `user_id` varchar(36) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `organization_id` varchar(36) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `clerk_org_id` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `customers` ADD CONSTRAINT `customers_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_organization_id_organizations_id_fk` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE cascade ON UPDATE no action;