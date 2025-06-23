const clubs = [
  { name: 'Manchester City', league: 'Premier League', country: 'Inggris' },
  { name: 'Liverpool FC', league: 'Premier League', country: 'Inggris' },
  { name: 'Real Madrid', league: 'La Liga', country: 'Spanyol' },
  { name: 'Barcelona', league: 'La Liga', country: 'Spanyol' },
  { name: 'AC Milan', league: 'Serie A', country: 'Italia' },
  { name: 'Juventus', league: 'Serie A', country: 'Italia' },
  { name: 'Bayern Munich', league: 'Bundesliga', country: 'Jerman' },
  { name: 'Borussia Dortmund', league: 'Bundesliga', country: 'Jerman' },
  { name: 'Paris Saint-Germain', league: 'Ligue 1', country: 'Prancis' },
  { name: 'Olympique Marseille', league: 'Ligue 1', country: 'Prancis' },
];

const clubList = document.getElementById('clubList');
const buttons = document.querySelectorAll('.filterBtn');

function renderClubs(filtered) {
  clubList.innerHTML = filtered.map(club => `
    <div class="clubCard">
      <div class="clubName">${club.name}</div>
      <div class="clubDetail">Kompetisi: ${club.league}</div>
      <div class="clubDetail">Negara: ${club.country}</div>
    </div>
  `).join('');
}

function applyFilter(criteria) {
  let filtered = clubs;
  if (criteria.league) {
    filtered = filtered.filter(c => c.league === criteria.league);
  }
  if (criteria.country) {
    filtered = filtered.filter(c => c.country === criteria.country);
  }
  renderClubs(filtered);
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const league = btn.dataset.league || null;
    const country = btn.dataset.country || null;
    const isReset = btn.dataset.filter === 'all';
    if (isReset) {
      renderClubs(clubs);
    } else {
      applyFilter({ league, country });
    }
  });
});

renderClubs(clubs);