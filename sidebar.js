// Shared sidebar HTML
function renderSidebar(activePage) {
  const links = [
    { href: 'index.html', icon: '⬛', label: 'Dashboard', id: 'dashboard' },
    { href: 'inventory.html', icon: '📦', label: 'Inventori', id: 'inventory', badge: '3' },
    { href: 'inbound.html', icon: '📥', label: 'Penerimaan', id: 'inbound' },
    { href: 'outbound.html', icon: '📤', label: 'Pengiriman', id: 'outbound' },
    { href: 'reports.html', icon: '📊', label: 'Laporan', id: 'reports' },
  ];

  const navItems = links.map(l => `
    <li class="nav-item">
      <a href="${l.href}" class="nav-link ${activePage === l.id ? 'active' : ''}">
        <span class="nav-icon">${l.icon}</span>
        ${l.label}
        ${l.badge ? `<span class="nav-badge">${l.badge}</span>` : ''}
      </a>
    </li>
  `).join('');

  return `
    <div class="sidebar-brand">
      <span class="brand-icon">🏭</span>
      <span class="brand-name">WareHouse Pro</span>
      <span class="brand-sub">Gudang Utama – Jakarta</span>
    </div>
    <div class="sidebar-section-label">Menu Utama</div>
    <nav class="sidebar-nav">
      <ul class="list-unstyled mb-0">${navItems}</ul>
    </nav>
    <div class="sidebar-section-label">Pengaturan</div>
    <nav class="sidebar-nav">
      <ul class="list-unstyled mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon">⚙️</span> Pengaturan
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon">👥</span> Pengguna
          </a>
        </li>
      </ul>
    </nav>
    <div class="sidebar-footer">
      <div class="user-info">
        <div class="user-avatar">AR</div>
        <div>
          <div class="user-name">Ahmad Rizky</div>
          <div class="user-role">Admin Gudang</div>
        </div>
        <span class="ms-auto" style="color:var(--text-secondary);font-size:12px;">⚡</span>
      </div>
    </div>
  `;
}

function initSidebar(activePage) {
  document.getElementById('sidebar').innerHTML = renderSidebar(activePage);
  // Update topbar date
  const el = document.getElementById('topbar-date');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleDateString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  }
}
