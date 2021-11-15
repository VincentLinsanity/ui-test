CREATE TABLE IF NOT EXISTS "Users" (
   "acct" VARCHAR(255) , 
   "pwd" VARCHAR(255), 
   "fullname" VARCHAR(255), 
   "create_at" TIMESTAMP WITH TIME ZONE NOT NULL, 
   "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, 
   PRIMARY KEY ("acct")
);
