CREATE TABLE "oauth_authorization_code" (
	"authorization_code" varchar(255) PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"redirect_uri" text NOT NULL,
	"scope" text,
	"authorization_details" jsonb,
	"code_challenge" text,
	"code_challenge_method" text,
	"client_id" varchar(255) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "oauth_client" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"client_id" varchar(255) NOT NULL,
	"client_secret" varchar(255),
	"name" varchar(255) NOT NULL,
	"description" text,
	"logo_uri" text,
	"redirect_uris" text[] NOT NULL,
	"grant_types" text[] NOT NULL,
	"token_endpoint_auth_method" text NOT NULL,
	"scope" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "oauth_client_client_id_unique" UNIQUE("client_id")
);
--> statement-breakpoint
CREATE TABLE "oauth_token" (
	"access_token" varchar(255) PRIMARY KEY NOT NULL,
	"access_token_expires_at" timestamp NOT NULL,
	"refresh_token" varchar(255),
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"authorization_details" jsonb,
	"client_id" varchar(255) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "oauth_token_refresh_token_unique" UNIQUE("refresh_token")
);
--> statement-breakpoint
ALTER TABLE "oauth_authorization_code" ADD CONSTRAINT "oauth_authorization_code_client_id_oauth_client_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."oauth_client"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "oauth_token" ADD CONSTRAINT "oauth_token_client_id_oauth_client_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."oauth_client"("id") ON DELETE cascade ON UPDATE no action;