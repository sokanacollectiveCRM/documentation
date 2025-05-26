---
id: layout
title: Website Layout Guide
sidebar_position: 3
---

This website switches between two types of layouts: **DashboardLayout** and **NavLayout**. As you might tell, one is for the dashboard and the other for a navigation bar.

## NavLayout

This setup flows from up to down. That is, the navbar is at the top of the page.

## DashboardLayout

This setup flows from left to right. It uses a **Sidebar** component, and the rest of the content shows up to the right. While there were plans to make this collapsible, it is disabled for now. This is wrapped in a **SearchProvider**, which is used for the search function.

## So, when are each used?

Under `src/common/components/routes`, we have a **public** and **private** route. A public route means that you can only access the signup/login pages so long as you are not authenticated. Attempting to reach any private route will redirect you to login.

We have utilised this logic for the layouts as well. If you are **authenticated**, you will have a sidebar (DashboardLayout). Otherwise, we assume you are not logged in and thus, will see a navbar.

## Sidebar

The sidebar component we are using is under `src/common/components/navigation/sidebar/AppSidebar`. You can edit the URL's and sidebar sections under `src/common/data/sidebar-data.ts`.