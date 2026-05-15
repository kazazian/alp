document.addEventListener("DOMContentLoaded", () => {
    const productStates = {
    all: [
        ["Дебетовые карты", "Суперкэшбэк до 100%"],
        ["Кредитные карты", "Обслуживание бесплатно"],
        ["Кредиты", "Оформите онлайн"],
        ["Накопления", "Деньги с хорошими процентами"],
        ["Инвестиции", "Начните зарабатывать"],
        ["Ипотека", "Одобрение за 30 секунд"],
        ["Alfa Only", "Ваш премиальный сервис"],
        ["Для детей и семьи", "Карты с кэшбэком"]
    ],
    small: [
        ["Р/с за 0", "Быстрый старт для ИП"],
        ["Эквайринг", "Прием оплаты за день"],
        ["Бизнес-кредит", "Заявка без звонка"],
        ["Овернайт", "Свободные деньги в рост"],
        ["Онлайн-бух", "Документы в пару кликов"],
        ["Лизинг+", "Техника без лишних писем"],
        ["Премиум Biz", "Сервис без шума"],
        ["Команда+", "Карты и роли для всех"]
    ],
    corp: [
        ["Корп-карты", "Лимиты и контроль"],
        ["Финансирование", "Решения под оборот"],
        ["Гарантии", "Сделки без пауз"],
        ["Ликвидность", "Гибкие сценарии"],
        ["Казначейство", "Платежи в одном окне"],
        ["Зарплатный проект", "Подключение без суеты"],
        ["Private Line", "Отдельный канал сервиса"],
        ["HR-пакет", "Удобно для больших команд"]
    ]
};

const offerStates = {
    mobile: [
        ["Альфа-выгодная связь", "50 ГБ, 500 минут и бонусы"],
        ["Безлимитный интернет", "Бесплатно и навсегда с тарифом Лайт"]
    ],
    travel: [
        ["Маршрут без пауз", "Билеты, мили и тихий рандом букв"],
        ["Отели и перелеты", "QWE trip бонусы и кешбэк"]
    ],
    afisha: [
        ["Билеты и премьеры", "AFI sha буквы и скидки рядом"],
        ["Концерты в ленте", "Музыка, шоу и набор zxv"]
    ],
    fuel: [
        ["Выгода на заправках", "Топливо дешевле и fuel abc"],
        ["Маршрут по пути", "АЗС, кофе и немного rtz"]
    ],
    subs: [
        ["Подписки без шума", "Сервисы в одной оплате mkq"],
        ["Пакет выгод", "Фильмы, музыка и буквы nlp"]
    ],
    safe: [
        ["Защита на каждый день", "Полис и спокойный набор qaz"],
        ["Страхование онлайн", "Пара минут и текст vbn"]
    ]
};

const aboutStates = {
    wins: [
        "Альфа-Банк - лучший работодатель России",
        "Три года подряд по версии рейтингов"
    ],
    job: [
        "Работа в Альфе - быстрый рост и команды",
        "Проекты, люди и немного букв rta qwe"
    ]
};

function setActiveButton(group, clickedButton, className) {
    const buttons = group.querySelectorAll(`.${className}`);
    buttons.forEach((button) => button.classList.remove(`${className}-active`));
    clickedButton.classList.add(`${className}-active`);
}

function bindProducts() {
    const group = document.querySelector('[data-filter-group="products"]');
    if (!group) {
        return;
    }

    const titles = document.querySelectorAll(".js-product-title");
    const texts = document.querySelectorAll(".js-product-text");

    group.addEventListener("click", (event) => {
        const button = event.target.closest(".tab");
        if (!button) {
            return;
        }

        setActiveButton(group, button, "tab");

        const key = button.dataset.filterKey;
        const state = productStates[key] || productStates.all;

        titles.forEach((title, index) => {
            title.textContent = state[index][0];
        });

        texts.forEach((text, index) => {
            text.textContent = state[index][1];
        });
    });
}

function bindOffers() {
    const group = document.querySelector('[data-filter-group="offers"]');
    if (!group) {
        return;
    }

    const titles = document.querySelectorAll(".js-offer-title");
    const texts = document.querySelectorAll(".js-offer-text");

    group.addEventListener("click", (event) => {
        const button = event.target.closest(".pill");
        if (!button) {
            return;
        }

        setActiveButton(group, button, "pill");

        const key = button.dataset.filterKey;
        const state = offerStates[key] || offerStates.mobile;

        titles.forEach((title, index) => {
            title.textContent = state[index][0];
        });

        texts.forEach((text, index) => {
            text.textContent = state[index][1];
        });
    });
}

function bindAbout() {
    const group = document.querySelector('[data-filter-group="about"]');
    if (!group) {
        return;
    }

    const title = document.querySelector(".js-about-title");
    const text = document.querySelector(".js-about-text");

    group.addEventListener("click", (event) => {
        const button = event.target.closest(".tab");
        if (!button) {
            return;
        }

        setActiveButton(group, button, "tab");

        const key = button.dataset.filterKey;
        const state = aboutStates[key] || aboutStates.wins;

        title.textContent = state[0];
        text.textContent = state[1];
    });
}

bindProducts();
bindOffers();
bindAbout();
})
