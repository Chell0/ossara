import {Category, NewsItem} from "./types";

// data.ts
export const newsData: NewsItem[] = [
    { id: 1, title: "Neuigkeiten 1", category: "Sports", date: "2024-10-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.", image: "/news/img.jpg" },
    { id: 2, title: "Neuigkeiten 2", category: "Technology", date: "2024-11-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.", image: "/news/img1.jpg" },
    { id: 3, title: "Neuigkeiten 3", category: "Health", date: "2024-11-05", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.", image: "/news/img2.jpg" },
    { id: 4, title: "Neuigkeiten 4", category: "Education", date: "2024-11-06", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.", image: "/news/img3.jpg" },
    { id: 5, title: "Neuigkeiten 5", category: "Technology", date: "2024-11-07", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.", image: "/news/img4.jpg" },
    { id: 6, title: "Neuigkeiten 6", category: "Sports", date: "2024-11-08", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.", image: "/news/img.jpg" },
    { id: 7, title: "Neuigkeiten 7", category: "Technology", date: "2024-11-09", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque.", image: "/news/img1.jpg" }
];


export const archiveData: NewsItem[] = [
    { id: 8, title: "Archive 1", category: "Health", date: "2023-09-01", content: "Content of Archive 1", image: "/news/img.jpg" },
    { id: 9, title: "Archive 2", category: "Education", date: "2023-08-01", content: "Content of Archive 2", image: "/news/img1.jpg" },
    { id: 10, title: "Archive 3", category: "Sports", date: "2023-08-01", content: "Content of Archive 3", image: "/news/img2.jpg" },
    { id: 11, title: "Archive 4", category: "Education", date: "2023-08-01", content: "Content of Archive 4", image: "/news/img3.jpg" },
    { id: 12, title: "Archive 5", category: "Technology", date: "2023-08-01", content: "Content of Archive 5", image: "/news/img4.jpg" },
    { id: 13, title: "Archive 6", category: "Sports", date: "2023-08-01", content: "Content of Archive 6", image: "/news/img.jpg" },
    { id: 14, title: "Archive 7", category: "Education", date: "2023-08-01", content: "Content of Archive 7", image: "/news/img1.jpg" }
];

export const categories: Category[] = [
    { id: 1, name: "Sports" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Health" },
    { id: 4, name: "Education" },
];
