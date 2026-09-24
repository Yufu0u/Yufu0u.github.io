(() => {
    const list = document.querySelector("#archive-list");
    const controls = document.querySelector("#archive-filters");
    const searchInput = document.querySelector("#archive-search");
    const yearSelect = document.querySelector("#archive-year");
    const status = document.querySelector("#archive-status");
    const fallback = document.querySelector("#archive-fallback");
    const emptyMessage = document.querySelector("#archive-empty");
    const pagination = document.querySelector("#archive-pagination");
    const previousButton = document.querySelector("#page-previous");
    const nextButton = document.querySelector("#page-next");
    const pageIndicator = document.querySelector("#page-indicator");

    if (!list || !controls || !searchInput || !yearSelect || !status || !fallback || !emptyMessage || !pagination || !previousButton || !nextButton || !pageIndicator) return;

    const entries = Array.from(list.querySelectorAll(".archive-entry"));
    const pageSize = 10;
    let currentPage = 0;
    let filteredCount = entries.length;

    const years = [...new Set(entries.map((entry) => entry.dataset.year).filter(Boolean))].sort((a, b) => b.localeCompare(a));
    for (const year of years) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.append(option);
    }

    function normalize(value) {
        return value.normalize("NFKC").toLocaleLowerCase("zh-CN").trim();
    }

    function render() {
        const query = normalize(searchInput.value);
        const selectedYear = yearSelect.value;
        const matches = entries.filter((entry) => {
            const yearMatches = selectedYear === "all" || entry.dataset.year === selectedYear;
            const searchMatches = !query || normalize(entry.dataset.search || entry.textContent).includes(query);
            return yearMatches && searchMatches;
        });
        filteredCount = matches.length;
        const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));
        currentPage = Math.min(currentPage, totalPages - 1);
        const visibleEntries = new Set(matches.slice(currentPage * pageSize, (currentPage + 1) * pageSize));

        for (const entry of entries) entry.hidden = !visibleEntries.has(entry);
        emptyMessage.hidden = matches.length !== 0;
        status.textContent = matches.length === entries.length
            ? `共 ${matches.length} 篇日志 · 第 ${currentPage + 1} / ${totalPages} 页`
            : `找到 ${matches.length} 篇日志 · 第 ${currentPage + 1} / ${totalPages} 页`;
        pageIndicator.textContent = `第 ${currentPage + 1} / ${totalPages} 页`;
        previousButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage >= totalPages - 1;
    }

    controls.hidden = false;
    pagination.hidden = false;
    fallback.hidden = true;
    searchInput.addEventListener("input", () => {
        currentPage = 0;
        render();
    });
    yearSelect.addEventListener("change", () => {
        currentPage = 0;
        render();
    });
    controls.addEventListener("submit", (event) => event.preventDefault());
    previousButton.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage -= 1;
            render();
        }
    });
    nextButton.addEventListener("click", () => {
        if ((currentPage + 1) * pageSize < filteredCount) {
            currentPage += 1;
            render();
        }
    });
    render();
})();
