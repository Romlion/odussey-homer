import React, { useState } from "react";

function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        prenom: "",
        nom: ""
    })

    // Gestion des changements dans les champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Données du formulaire soumises:", formData);
    }

    return (
        <div>
            <h2>Formulaire d'iscription</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email :
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Mot de passe :
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Confirmer le mot de passe :
                    <input
                        type="password"
                        name="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Prénom :
                    <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Nom :
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="Soumettre" />
            </form>

            <div style={{ marginTop: '20px' }}>
                <h3>Etat du formulaire</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    )
}

export default SignUp