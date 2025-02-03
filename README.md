# Nimbus - Storage Management Platform

# Description

Nimbus is a storage management platform built with Next.js, Typescript, Appwrite Backend-as-a-Service, TailwindCSS and shadcn/ui.

# Used Technologies

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![Appwrite](https://img.shields.io/badge/Appwrite-FA5C5C?style=for-the-badge&logo=appwrite&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![ShadCN](https://img.shields.io/badge/ShadCN-000000?style=for-the-badge&logo=shadcn&logoColor=white)

# Demo Images

# Technical Features

- User Authentication with Appwrite
- View and Manage Files
- File Uploads
- See file details, rename, download, share and delete
- File Search
- Different Sorting Options
- Responsive Design

- - -

# Getting Started

## Prerequisites

- "node.js" installed, at least version 18 or newer
- "npm" installed

## Installation

    # Clone the repository
    git clone https://github.com/szidzse/nimbus

    # Install dependencies
    npm install

    # Start the development server
    npm run dev

## Setting up Appwrite

1. Create an Appwrite account if you haven't already (https://appwrite.io/), then navigate to console
2. Create a new project, and obtain your credentials

## Environment variables

   Create an .env.local file with the following key-value pairs:

    NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
    NEXT_PUBLIC_APPWRITE_PROJECT=""
    NEXT_PUBLIC_APPWRITE_DATABASE=""
    NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
    NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
    NEXT_PUBLIC_APPWRITE_BUCKET=""
    NEXT_APPWRITE_KEY=""

   Replace the values with your actual Appwrite credentials that you got in the Appwrite Console. (https://cloud.appwrite.io/console/)

# Docker

In progress...
