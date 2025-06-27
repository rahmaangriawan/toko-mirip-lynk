  <script>
        // Inisialisasi Lucide Icons
        lucide.createIcons();

        // --- Logika untuk Dropdown Menu ---
        const menuButton = document.getElementById('menu-button');
        const dropdownMenu = document.getElementById('dropdown-menu');
        menuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownMenu.classList.toggle('show');
            dropdownMenu.classList.toggle('hidden');
        });
        window.addEventListener('click', () => {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
                dropdownMenu.classList.add('hidden');
            }
        });

        // --- Logika untuk Modal (Popup) ---
        const openModalButtons = document.querySelectorAll('[data-modal-target]');
        const closeModalButtons = document.querySelectorAll('[data-close-button]');
        function openModal(modal) { if (modal == null) return; modal.classList.remove('hidden'); modal.classList.add('modal'); }
        function closeModal(modal) { if (modal == null) return; modal.classList.add('hidden'); modal.classList.remove('modal'); }
        openModalButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
                dropdownMenu.classList.remove('show');
                dropdownMenu.classList.add('hidden');
            });
        });
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => { closeModal(button.closest('.fixed')); });
        });
        document.querySelectorAll('.fixed.inset-0').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) { closeModal(overlay); }
            });
        });
    </script>
