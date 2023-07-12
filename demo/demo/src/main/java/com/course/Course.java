package com.course;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name="courses")
public class Course {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="name")
    @NotNull
    private String name;

    @Column(name="description")
    @NotNull
    private String description;

    @Column(name="url")
    @NotNull
    private String url;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Course(){}
    public Course(long id, String name, String description, String url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
