
const express = require("express");
require('dotenv').config()
const path = require("path");
const {InitializeDB} = require("../app/database/init");
const seedRecords = require("./seeder/index.seeder")
const app = express();
const PORT = 3000

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

const blogPosts = [
    {
        id: "1e21c09a-1234-4f09-8f9e-1234567890ab",
        title: "The Future of Artificial Intelligence: Trends to Watch in 2024",
        author: "Sarah Johnson",
        authorDescription: "Sarah Johnson is a leading tech journalist with a passion for artificial intelligence and emerging technologies. She has been writing about the tech industry for over a decade and is known for her insightful analysis and forward-thinking perspectives.",
        authorThumbnail: "https://via.placeholder.com/150/0000FF/808080?text=Sarah+Johnson",
        authorSocialMedia: {
            twitter: "@SarahTech",
            linkedin: "https://linkedin.com/in/sarahjohnson"
        },
        category: "Technology",
        content: "As AI continues to evolve, several key trends are emerging that will shape its future. From advancements in machine learning to ethical considerations, here's what to watch for in 2024. Machine learning algorithms are becoming more sophisticated, enabling faster and more accurate data analysis. Meanwhile, the integration of AI in various industries, such as healthcare and finance, is transforming traditional processes and creating new opportunities for innovation. Ethical considerations, including data privacy and bias in AI systems, remain critical challenges that need to be addressed to ensure the responsible development and deployment of AI technologies.",
        date: "June 1, 2024",
        views: 4500,
        comments: 8,
        readTime: "3 minutes",
        shares: 2200,
        bannerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        tags: ["AI", "Machine Learning", "Technology Trends"]
    },
    {
        id: "2a34f09b-5678-4b19-8a7e-9876543210cd",
        title: "5G Technology: How It's Changing the World",
        author: "Michael Lee",
        authorDescription: "Michael Lee is a technology analyst and writer who specializes in telecommunications and connectivity advancements. With a background in electrical engineering, Michael provides deep insights into the technological transformations shaping our connected world.",
        authorThumbnail: "https://via.placeholder.com/150/008000/808080?text=Michael+Lee",
        authorSocialMedia: {
            twitter: "@MikeLeeTech",
            linkedin: "https://linkedin.com/in/michaellee"
        },
        category: "Technology",
        content: "5G technology is set to revolutionize the way we connect and communicate. This article explores the impact of 5G on various industries and what it means for the future of connectivity. With faster data speeds and lower latency, 5G is enabling advancements in fields such as autonomous vehicles, remote healthcare, and smart cities. The increased bandwidth allows for more devices to be connected simultaneously, facilitating the growth of the Internet of Things (IoT). However, the deployment of 5G also presents challenges, including the need for significant infrastructure investment and addressing potential security concerns.",
        date: "May 25, 2024",
        views: 3900,
        comments: 5,
        readTime: "23 minutes",
        shares: 1800,
        bannerImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        tags: ["5G", "Connectivity", "Innovation"]
    },
    {
        id: "3b56d78c-9012-4c98-9b7e-3456789012ef",
        title: "Cybersecurity in 2024: Top Threats and How to Stay Safe",
        author: "Jessica Green",
        authorDescription: "Jessica Green is a cybersecurity expert and consultant with over 15 years of experience in the field. She regularly shares her knowledge on protecting digital assets and staying ahead of cyber threats through her writing and speaking engagements.",
        authorThumbnail: "https://via.placeholder.com/150/FF0000/808080?text=Jessica+Green",
        authorSocialMedia: {
            twitter: "@JessicaCyber",
            linkedin: "https://linkedin.com/in/jessicagreen"
        },
        category: "Technology",
        content: "With cyber threats becoming increasingly sophisticated, it's crucial to stay informed about the latest trends in cybersecurity. Here are the top threats to watch for in 2024 and tips on how to protect yourself. Phishing attacks are growing more sophisticated, often leveraging social engineering to trick users into divulging sensitive information. Ransomware attacks continue to rise, targeting both individuals and organizations. To stay safe, it's essential to use strong, unique passwords, enable two-factor authentication, and keep software up to date. Additionally, being aware of common scams and practicing good cyber hygiene can help mitigate risks.",
        date: "April 15, 2024",
        views: 4200,
        comments: 10,
        readTime: "30 minutes",
        shares: 2400,
        bannerImage: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
        tags: ["Cybersecurity", "Threats", "Online Safety"]
    },
    {
        id: "4d67e89d-3456-4d21-8b9e-4567890123gh",
        title: "Quantum Computing: Breaking Down the Basics",
        author: "David Smith",
        authorDescription: "David Smith is a physicist and technology writer with a focus on quantum computing and advanced computing technologies. His work demystifies complex scientific concepts, making them accessible to a broad audience.",
        authorThumbnail: "https://via.placeholder.com/150/000000/808080?text=David+Smith",
        authorSocialMedia: {
            twitter: "@DavidQuantum",
            linkedin: "https://linkedin.com/in/davidsmith"
        },
        category: "Technology",
        content: "Quantum computing is poised to revolutionize computing as we know it. This article breaks down the basics of quantum computing and explores its potential applications. Unlike classical computers, which use bits as the smallest unit of data, quantum computers use qubits, which can represent both 0 and 1 simultaneously. This allows quantum computers to solve complex problems much faster than classical computers. Potential applications include drug discovery, optimization problems, and cryptography. However, significant challenges remain in developing stable and scalable quantum systems.",
        date: "March 30, 2024",
        views: 3700,
        comments: 6,
        readTime: "22 minutes",
        shares: 2000,
        bannerImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        tags: ["Quantum Computing", "Technology", "Innovation"]
    },
    {
        id: "5e78f90e-6789-4e32-9b7e-5678901234ij",
        title: "The Rise of Blockchain: Beyond Cryptocurrencies",
        author: "Emily White",
        authorDescription: "Emily White is a blockchain strategist and writer known for her expertise in decentralized technologies and their applications beyond cryptocurrencies. She advises startups and established companies on integrating blockchain solutions to drive innovation and efficiency.",
        authorThumbnail: "https://via.placeholder.com/150/FFA500/808080?text=Emily+White",
        authorSocialMedia: {
            twitter: "@EmilyBlockchain",
            linkedin: "https://linkedin.com/in/emilywhite"
        },
        category: "Technology",
        content: "While blockchain technology is often associated with cryptocurrencies, its potential applications extend far beyond. This article explores how blockchain is being used in various industries. In supply chain management, blockchain can enhance transparency and traceability, reducing fraud and improving efficiency. In healthcare, blockchain can secure patient records and streamline data sharing among providers. Other applications include digital identity verification, voting systems, and intellectual property protection. Despite its promise, blockchain faces challenges such as scalability, regulatory hurdles, and the need for widespread adoption.",
        date: "February 20, 2024",
        views: 4000,
        comments: 7,
        readTime: "43 minutes",
        shares: 2100,
        bannerImage: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/c97365d8048aa21b7100f8c728e03877.jpg",
        tags: ["Blockchain", "Cryptocurrency", "Technology"]
    }
];

//  DATABASE LEVEL - TABLES (EACH TABLE HAS COLUMNS)
// CODE LEVEL  - DATABASE BECOME (MODELS) - A TABLE Becomes a MODEL -> Columns become (PROPERTIES)


app.get("/", (req, res) => {
    try {
        return res.render("pages/home", { blogPosts });
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
})

app.get("/seed-data", async (req, res) => {
    try {
        if(process.env.ENVIROMENT == "dev"){
            await seedRecords();
        }
        return res.json({message:"Seed Worked"});
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
})



app.get("/post/:id", (req, res) => {
    try {
        const postId = req.params.id;
        let postsData = blogPosts.filter((post) => (post.id == postId));
        if (postsData.length == 0) {
            return res.render("pages/404", { message: "Post does not exist" });
        }
        const post = postsData[0];
        return res.render("pages/post", { post });
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
})

app.listen(PORT, async() => {
    await InitializeDB();
    console.log("Listening to PORT " + PORT);
})

// -- MVC DESIGN PATTERN
//

// - FRONT 