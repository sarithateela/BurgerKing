
document.getElementById('orderButton').addEventListener('click', async function() {
    const selectedItems = [];
    const checkBoxes = document.querySelectorAll('input[name="foodItem"]:checked');
  
    checkBoxes.forEach((checkbox) => {
      selectedItems.push(checkbox.value);
    });
  
    if (selectedItems.length === 0) {
      alert("Please select at least one item");
      return;
    }
  
    const orderButton = document.getElementById('orderButton');
    const foodImage = document.getElementById('foodImage');
    const orderIdContainer = document.getElementById('orderId');
    const orderIdValue = document.getElementById('orderIdValue');
    const loadingMessage = document.getElementById('loading');
    orderButton.disabled = true;
    orderIdContainer.style.display = 'none';
    foodImage.style.display = 'none';
    loadingMessage.style.display = 'block';
    try {
  
      await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 5000) + 2000));
      const orderId = Math.floor(Math.random() * 1000) + 10000;
      orderIdValue.textContent = orderId;
      orderIdContainer.style.display = 'block';
      const randomFood = selectedItems[Math.floor(Math.random() * selectedItems.length)];
  
      if (randomFood === 'Burger') {
        foodImage.src = 'https://source.unsplash.com/random/600x400?burger';
      } else if (randomFood === 'Fries') {
        foodImage.src = 'https://source.unsplash.com/random/600x400?healthy-fries';
      } else if (randomFood === 'Drink') {
        foodImage.src = 'https://source.unsplash.com/random/600x400?drink';
      } else if (randomFood === 'Pizza') {
        foodImage.src = 'https://source.unsplash.com/random/600x400?pizza';
      } 
      
      foodImage.style.display = 'block';
    } catch (error) {
      console.error("Error processing order:", error);
    } finally {
      loadingMessage.style.display = 'none';
      orderButton.disabled = false;
    }
  });
  
