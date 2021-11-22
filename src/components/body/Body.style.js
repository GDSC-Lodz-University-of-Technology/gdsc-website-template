export const style = `
:host {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
}
main {
  width: 100%;
  padding: var(--spacing-l);
  box-sizing: border-box;
}
:host::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.375rem rgba(0, 0, 0, 0.3);
    background-color: transparent;
  }

:host::-webkit-scrollbar {
  width: 0.75rem;
  background-color: transparent;
}

:host::-webkit-scrollbar-thumb {
  background-color: var(--brand);
}
`;