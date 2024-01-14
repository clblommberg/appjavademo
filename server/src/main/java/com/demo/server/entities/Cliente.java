package com.demo.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
@AllArgsConstructor
@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private String email;
    private String phone;
    private String address;

    // Constructor, getters y setters
    // Constructor con parámetros
    // Constructor por defecto vacío
    public Cliente() {
        // Constructor vacío requerido por Hibernate
    }

    // Constructor con parámetros
    public Cliente(String nombre, String apellido, String email, String phone, String address) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    // Puedes incluir aquí tus constructores, getters y setters según tus
    // necesidades.
    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // También puedes agregar otros campos de acuerdo a tu modelo de datos.
}