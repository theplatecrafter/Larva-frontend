document.getElementById('sliceForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData();
  const stlFile = document.getElementById('stlFile').files[0];
  formData.append('stlFile', stlFile);
  
  formData.append('normalX', document.getElementById('normalX').value);
  formData.append('normalY', document.getElementById('normalY').value);
  formData.append('normalZ', document.getElementById('normalZ').value);
  
  formData.append('pointX', document.getElementById('pointX').value);
  formData.append('pointY', document.getElementById('pointY').value);
  formData.append('pointZ', document.getElementById('pointZ').value);

  const response = await fetch('http://localhost:8000/slice-stl', {
      method: 'POST',
      body: formData
  });

  const result = await response.json();
  document.getElementById('output').innerText = result.message;
});
