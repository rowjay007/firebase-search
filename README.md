

```markdown
# Firebase Search Project

A Node.js-based tool to search for exact matches in a Firebase Firestore collection. The project uses environment variables to securely manage Firebase credentials, allowing users to easily clone, configure, and run search queries. Ideal for quick integration and open-source deployment.

## Prerequisites

- Node.js installed on your machine
- Firebase project with Firestore enabled

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/firebase-search.git
   cd firebase-search
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your Firebase credentials:
   ```bash
   touch .env
   ```

   Add the following content to the `.env` file:
   ```dotenv
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   ```

   Replace the placeholders with your actual Firebase project credentials.

4. **Run the search:**
   ```bash
   node searchFirestore.js
   ```

   This will search the Firestore collection `ActionsTemplates` for documents with the title `"Let's game for 2 hours"` and print the results.

## Usage

- **To modify the search term:** Edit the `searchExactTitle` function inside `searchFirestore.js` to query other fields or collections.
- **To integrate into other projects:** This script can be extended or integrated into larger Node.js applications requiring Firestore queries.
