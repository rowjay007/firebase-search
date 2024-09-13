```markdown
# Firebase Search Project

A Node.js-based tool to search for exact matches in a Firebase Firestore collection. The project uses environment variables to securely manage Firebase credentials, allowing users to easily clone, configure, and run search queries. Ideal for quick integration and open-source deployment.

## Introduction

This project provides a straightforward way to search data in Firebase Firestore using Node.js. It is designed for developers who need a quick and easy method to perform exact match searches on their Firestore collections.

## Features

- Search for exact matches in a Firestore collection.
- Securely manage Firebase credentials using environment variables.
- Easy setup and deployment.

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

   This will search the Firestore collection `ActionsTemplates` for documents with the title `"Purchase and play game for 2 hours"` and print the results.

## Usage

- **To modify the search term:** Edit the `searchExactTitle` function inside `searchFirestore.js` to query other fields or collections.
- **To integrate into other projects:** This script can be extended or integrated into larger Node.js applications requiring Firestore queries.

## Configuration

- **Search Term:** Modify the `searchExactTitle` function to update the search term or target different fields.

## Contributing

Contributions are welcome! Please follow these guidelines:
- Fork the repository and create a new branch.
- Make your changes and test thoroughly.
- Submit a pull request with a clear description of your changes.

For any issues or questions, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For further support or inquiries, please contact me on [GitHub](https://github.com/rowjay007).

## Acknowledgments

- [Firebase](https://firebase.google.com/) for providing the Firestore database.
- [Node.js](https://nodejs.org/) for the runtime environment.

## Changelog

Check the [CHANGELOG](CHANGELOG.md) for updates and changes to the project.
```