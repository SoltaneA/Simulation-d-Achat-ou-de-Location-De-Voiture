// script.js

document.getElementById("calculate").addEventListener("click", () => {
    const price = parseFloat(document.getElementById("price").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const duration = parseInt(document.getElementById("duration").value);
    const annualRate = parseFloat(document.getElementById("rate").value);
  
    if (isNaN(price) || isNaN(downPayment) || isNaN(duration) || isNaN(annualRate) || price <= 0 || downPayment < 0 || duration <= 0 || annualRate < 0) {
      alert("Veuillez entrer des valeurs valides.");
      return;
    }
  
    const loanAmount = price - downPayment;
    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, duration)) /
      (Math.pow(1 + monthlyRate, duration) - 1);
    const totalLoanCost = monthlyPayment * duration;
    const leaseCost = loanAmount * 0.02 * duration / 12;
  
    document.getElementById("loan-payment").textContent = monthlyPayment.toFixed(2);
    document.getElementById("total-loan-cost").textContent = totalLoanCost.toFixed(2);
    document.getElementById("lease-cost").textContent = leaseCost.toFixed(2);
  
    document.getElementById("results").classList.remove("hidden");
  
    const ctx = document.getElementById("comparison-chart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Achat", "Location"],
        datasets: [{
          label: "Coût Total (€)",
          data: [totalLoanCost, leaseCost],
          backgroundColor: ["#007BFF", "#28A745"]
        }]
      }
    });
  
    document.getElementById("download-pdf").addEventListener("click", () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text("Devis Simulation", 20, 20);
      doc.text(`Prix du véhicule: ${price} €`, 20, 40);
      doc.text(`Mensualité (Achat): ${monthlyPayment.toFixed(2)} €/mois`, 20, 50);
      doc.text(`Coût total (Achat): ${totalLoanCost.toFixed(2)} €`, 20, 60);
      doc.text(`Coût total (Location): ${leaseCost.toFixed(2)} €`, 20, 70);
      doc.save("devis_simulation.pdf");
    });
  
    document.getElementById("save-scenario").addEventListener("click", () => {
      const scenario = document.createElement("li");
      scenario.textContent = `Achat: ${totalLoanCost.toFixed(2)} €, Location: ${leaseCost.toFixed(2)} €`;
      document.getElementById("saved-scenarios").appendChild(scenario);
    });
  });
  
  document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Quand le formulaire de simulation est soumis
document.getElementById("calculate").addEventListener("click", () => {
    const price = parseFloat(document.getElementById("price").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const duration = parseInt(document.getElementById("duration").value);
    const annualRate = parseFloat(document.getElementById("rate").value);
  
    if (isNaN(price) || isNaN(downPayment) || isNaN(duration) || isNaN(annualRate) || price <= 0 || downPayment < 0 || duration <= 0 || annualRate < 0) {
      alert("Veuillez entrer des valeurs valides.");
      return;
    }
  
    const loanAmount = price - downPayment;
    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, duration)) /
      (Math.pow(1 + monthlyRate, duration) - 1);
    const totalLoanCost = monthlyPayment * duration;
    const leaseCost = loanAmount * 0.02 * duration / 12;
  
    document.getElementById("loan-payment").textContent = monthlyPayment.toFixed(2);
    document.getElementById("total-loan-cost").textContent = totalLoanCost.toFixed(2);
    document.getElementById("lease-cost").textContent = leaseCost.toFixed(2);
  
    document.getElementById("results").classList.remove("hidden");
  
    // Mettez à jour le graphique de comparaison
    const ctx = document.getElementById("comparison-chart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Achat", "Location"],
        datasets: [{
          label: "Coût Total (€)",
          data: [totalLoanCost, leaseCost],
          backgroundColor: ["#007BFF", "#28A745"]
        }]
      }
    });
  
    // Remplir le formulaire de contact avec les informations de la simulation
    document.getElementById("contact-car-model").value = "Toyota Corolla"; // Exemple de modèle, à remplacer par la sélection de l'utilisateur
    document.getElementById("contact-monthly-payment").value = monthlyPayment.toFixed(2);
    document.getElementById("contact-total-cost").value = totalLoanCost.toFixed(2);
  
    // Afficher le formulaire de contact
    document.getElementById("contact-form").classList.remove("hidden");
  });
  
  // Soumettre le formulaire de contact
  document.getElementById("contact-form-content").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Récupérer les valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const carModel = document.getElementById("contact-car-model").value;
    const monthlyPayment = document.getElementById("contact-monthly-payment").value;
    const totalCost = document.getElementById("contact-total-cost").value;
  
    // Affichage des informations dans la console (pour simuler l'envoi)
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Message :", message);
    console.log("Modèle de voiture :", carModel);
    console.log("Mensualité :", monthlyPayment);
    console.log("Coût total :", totalCost);
  
    // Simuler l'envoi du formulaire (par exemple, envoyer à une API ou un email)
    alert("Votre message a été envoyé au conseiller commercial!");
  
    // Vous pouvez vider le formulaire après soumission
    document.getElementById("contact-form-content").reset();
    document.getElementById("contact-form").classList.add("hidden");
  });
  
  });
  