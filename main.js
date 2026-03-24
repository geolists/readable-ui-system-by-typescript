"use strict";
const menuGroups = [
    {
        title: "主要業務",
        color: "rgb(224,128,0)",
        bgColor: "rgba(224,128,0,0.12)",
        items: [
            { id: 100, label: "仕事" },
            { id: 101, label: "出張" }
        ]
    },
    {
        title: "副次的行事",
        color: "rgb(248,196,128)",
        bgColor: "rgba(248,196,128,0.20)",
        items: [
            { id: 115, label: "旅行" },
            { id: 117, label: "休憩" },
            { id: 119, label: "買い物" },
            { id: 120, label: "練習" },
            { id: 121, label: "スポーツ観戦" },
            { id: 123, label: "飲み会" },
            { id: 124, label: "ゲームセンター" }
        ]
    },
    {
        title: "余暇",
        color: "rgb(64,224,164)",
        bgColor: "rgba(64,224,164,0.16)",
        items: [
            { id: 102, label: "服を買う" },
            { id: 103, label: "能力表示" },
            { id: 108, label: "アイテムを使う" },
            { id: 110, label: "資格表示" },
            { id: 215, label: "警備" }
        ]
    },
    {
        title: "その他",
        color: "rgb(255,255,255)",
        bgColor: "rgba(255,255,255,0.08)",
        titleColor: "#ffffff",
        items: [
            { id: 200, label: "SAVE" },
            { id: 300, label: "LOAD" },
            { id: 400, label: "記録室" },
            { id: 500, label: "CONFIG" }
        ]
    }
];
function createMenuScreen() {
    const app = document.getElementById("app");
    if (!app) {
        throw new Error("id='app' の要素が見つかりません。");
    }
    const panel = document.createElement("div");
    panel.className = "panel";
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "SHOP MENU";
    panel.appendChild(title);
    const resultArea = document.createElement("div");
    resultArea.className = "result-area";
    resultArea.textContent = "メニューを選択してください";
    for (let i = 0; i < menuGroups.length; i++) {
        const group = menuGroups[i];
        const groupSection = document.createElement("section");
        groupSection.className = "group-section";
        groupSection.style.backgroundColor = group.bgColor;
        groupSection.style.borderColor = group.color;
        const headerRow = document.createElement("div");
        headerRow.className = "group-header-row";
        const leftLine = document.createElement("div");
        leftLine.className = "group-header-line";
        leftLine.style.backgroundColor = group.color;
        const groupTitle = document.createElement("div");
        groupTitle.className = "group-title";
        groupTitle.textContent = group.title;
        groupTitle.style.color = group.titleColor ? group.titleColor : group.color;
        const rightLine = document.createElement("div");
        rightLine.className = "group-header-line";
        rightLine.style.backgroundColor = group.color;
        headerRow.appendChild(leftLine);
        headerRow.appendChild(groupTitle);
        headerRow.appendChild(rightLine);
        const buttonGrid = document.createElement("div");
        buttonGrid.className = "button-grid";
        for (let j = 0; j < group.items.length; j++) {
            const item = group.items[j];
            const button = document.createElement("button");
            button.className = "menu-button";
            button.style.borderColor = group.color;
            const idSpan = document.createElement("span");
            idSpan.className = "button-id";
            idSpan.textContent = "[" + item.id + "]";
            const labelSpan = document.createElement("span");
            labelSpan.textContent = item.label;
            button.appendChild(idSpan);
            button.appendChild(labelSpan);
            button.addEventListener("click", function () {
                resultArea.textContent =
                    item.id + " が入力されました（関数処理表示用なので機能未実装）";
            });
            buttonGrid.appendChild(button);
        }
        groupSection.appendChild(headerRow);
        groupSection.appendChild(buttonGrid);
        panel.appendChild(groupSection);
    }
    panel.appendChild(resultArea);
    app.appendChild(panel);
}
createMenuScreen();
