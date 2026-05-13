// ═══════════════════════════════════════════
//  InventarioPlus — app.js
// ═══════════════════════════════════════════

// ── Menú hamburguesa (móvil) ─────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.querySelectorAll('.navbar-links a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ── Datos de ejemplo ─────────────────────────
const datos = {
  ventasTotal:   1850.00,
  articulos:     24,
  stockTotal:    312,
  alertas: [
    { nombre: 'Producto A', restantes: 2 },
    { nombre: 'Producto B', restantes: 3 },
    { nombre: 'Producto C', restantes: 1 },
  ],
  movimientos: [
    { hora: '10:30 AM', desc: 'Venta realizada (#001)',       valor: '$150.00' },
    { hora: '09:15 AM', desc: 'Entrada de mercancía (Caja A)', valor: '+10 uds' },
    { hora: '08:50 AM', desc: 'Venta realizada (#002)',       valor: '$320.00' },
  ]
};

// ── Actualizar resumen del día ────────────────
document.getElementById('ventas-total').textContent  = `$${datos.ventasTotal.toFixed(2)}`;
document.getElementById('articulos-total').textContent = datos.articulos;
document.getElementById('stock-total').textContent   = datos.stockTotal;

// ── Renderizar alertas ────────────────────────
const alertasList = document.getElementById('alertas-list');
alertasList.innerHTML = '';
datos.alertas.forEach(a => {
  const p = document.createElement('p');
  p.className = 'alerta-item';
  p.textContent = `⚠ ${a.nombre} (${a.restantes} restantes)`;
  alertasList.appendChild(p);
});

// ── Renderizar movimientos ────────────────────
const movimientosList = document.getElementById('movimientos-list');
movimientosList.innerHTML = '';
datos.movimientos.forEach(m => {
  const p = document.createElement('p');
  p.className = 'movimiento-item';
  p.innerHTML = `<span>${m.hora} — ${m.desc}</span><span>${m.valor}</span>`;
  movimientosList.appendChild(p);
});

// ── Botón Agregar Venta ───────────────────────
document.getElementById('btn-agregar').addEventListener('click', () => {
  alert('Aquí irá el formulario para agregar una venta.');
});

// ── Botones de servicios ──────────────────────
document.querySelectorAll('.btn-service').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Módulo de ${btn.textContent.replace('Ir a ', '')} — próximamente.`);
  });
});
