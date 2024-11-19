import React from "react";
import { CoursesCard } from "@od/components/courses/CoursesCard.jsx";
import {Container, Row, Col, Button} from "react-bootstrap";
export const CoursesList = () => {
    const courses = [
        {
            "imgSrc": "/src/assets/ReactEgitim.webp",
            "title": "React Native ile Mobile Uygulama Geliştirme",
            "description": "React Native, cross-platform mobile uygulama geliştirme framework'üdür.",
            "tags": ["React Framework"],
            "hour": "13 Saat",
            "level": "Orta",
            "levelImg":"/src/assets/skill_medium.svg",
            "certificates": "Sertifikalı",
            "courseId": 6523
        },
        {
            "imgSrc": "/src/assets/UnityEgitim.webp",
            "title": "Unity ile Oyun Geliştirme",
            "description": "Unity, oyun geliştirmek için kullanılan güçlü ve esnek bir oyun motorudur. Bu eğitimde, Unity'nin temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.",
            "tags": ["Oyun Geliştirme", "Unity", "2D", "3D"],
            "hour": "13 Saat",
            "level": "Başlangıç",
            "levelImg":"/src/assets/skill_basic.svg",
            "certificates": "Sertifikalı",
            "courseId": 9852
        },
        {
            "imgSrc": "/src/assets/SqlEgitim.webp",
            "title": "Uygulamalarla SQL Eğitimi",
            "description": "SQL, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir. Bu eğitimde, SQL'in temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.",
            "tags": ["SQL", "Veri Tabanı", "SQL Server"],
            "hour": "13 Saat",
            "level": "Orta",
            "levelImg":"/src/assets/skill_medium.svg",
            "certificates": "Sertifikalı",
            "courseId": 7633
        }
    ];

    const renderGroupedCourses = () => {
        const groupedCourses = [];
        for (let i = 0; i < courses.length; i += 3) {
            groupedCourses.push(courses.slice(i, i + 3));
        }

        return groupedCourses.map((group, groupIndex) => (
            <Row key={groupIndex} className="mb-4">
                {group.map(course => (
                    <Col key={course.courseId} md={4}>
                        <CoursesCard
                            img={course.imgSrc}
                            title={course.title}
                            description={course.description}
                            tags={course.tags}
                            hour={course.hour}
                            level={course.level}
                            certificates={course.certificates}
                            levelImg={course.levelImg}
                        />
                    </Col>
                ))}
            </Row>
        ));
    };

    return (
        <Container>
            {renderGroupedCourses()}
            <div className="d-flex justify-content-center mt-4">
                <Button
                    style={{
                        backgroundColor: '#00C26D',
                        borderColor: '#00C26D',
                        borderRadius: '20px',
                        padding: '10px 30px'
                    }}
                    size="lg"
                >
                    Tüm Eğitimleri Gör
                </Button>
            </div>
        </Container>
    );
};