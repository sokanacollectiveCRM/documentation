---
id: authentication
title: Authentication
sidebar_position: 2
---

## Roles

There are three roles that can be assigned to a user in this website:

- Admin
- Doula
- Client

An **admin** has full access to any admin-related routes on the website. **Doulas** have limited access to admin-related routes. Usually, they'll only receive information to clients that they are assigned.

## Signing Up

We have limited the ability for users to sign up on the platform. We have 3 tables in supabase:

- users
- client_info
- auth/users

**auth/users** is what supabase uses to keep track of their authenticated users. We can not modify this table (other than deleting or adding users of course). It does not contain more specific information like address, bio, or profile_picture. 

Because of this, we also have a **users** table that contains basic profile information. The distinction we want to make is that **ANYONE** who has access to the site will be in the **users** table (as well as auth/users, they are basically tied to each other). 

Keep in mind that even though a client submits a request form, they **can not** login until an admin approves their contract. Since we still need their information on record, what we have done is to use the **users** table as the final check for whether a person can sign up.

For **doulas**, you must be invited by an admin to sign up. When an admin invites a doula, they are added to the **users** table, thus allowing them to sign up and create an account.

For **clients**, you must be accepted by an admin through a **signed** contract. Once that is done, they are added to the users table automatically, and then they can sign up.

This is incredibly useful and versatile! In the future, this could be used to archive users without deleting their records (just remove them from the users table but not from client_info).