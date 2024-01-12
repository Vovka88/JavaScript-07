const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const refs = {
  listRef: document.querySelector('.js-list'),
  inputRef: document.querySelector('#filter'),
};

const listItemNarkup = createListItemsMarkup(tech);
populateList(listItemNarkup);
function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

refs.inputRef.addEventListener('input', onFilterChanged);

function onFilterChanged(e) {
  const filter = e.target.value.toLowerCase();
  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );
  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.listRef.innerHTML = markup;
}
