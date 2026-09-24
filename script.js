// ============================================
// OBJ 5: Mi primera asincronía — "Pedido de pizza"
// ============================================
//
// 🎯 Meta: crear una promesa con setTimeout y
//    consumirla con .then().
//
// 📖 Estados de una promesa:
//    pendiente → cumplida (resuelta) o rechazada
//
// ============================================

console.log("=== OBJ 5: Pedido de pizza ===");

// 1. ✏️ TU TURNO: selecciona el botón (#btnPedir) y el estado (#estado)
  const boton = document.querySelector("#btnPedir");
  const estado = document.querySelector("#estado");



// 2. ✏️ TU TURNO: escucha el click del botón
//    Dentro de la función:
//     a. estado.textContent = "⏳ Preparando…";
//     b. crea la promesa:
//        const pedido = new Promise((cumplida) => {
//          setTimeout(() => cumplida("🍕 ¡Pizza lista!"), 2000);
//        });
//     c. consúmela con .then:
//        pedido.then((mensaje) => {
//          document.querySelector("#resultado").textContent = mensaje;
//        });
//    Pista: boton.addEventListener("click", () => { ... });

boton.addEventListener("click", () => {
  
  const pedido = new Promise(cumplida) => {
    estado.textContent = "⏳ Preparando… (nodo antes de promise)"
    console.log("estoy en la mitad de una Promise()");
    pedido.then((mensaje) => {
    document.querySelector("#resultado").textContent = mensaje;
    estado.textContent = "";
 });
  }
})

// ===== CHECK (no borres esta sección) =====
const btnCheck = document.querySelector("#btnCheck");
const autocheck = document.querySelector("#autocheck");

const resultados = [];
const check = (nombre, fn) => {
  try {
    const ok = fn();
    resultados.push(ok);
    console.log(ok ? `  ✅ ${nombre}` : `  ❌ ${nombre}`);
  } catch (e) {
    resultados.push(false);
    console.log(`  ❌ ${nombre} — falta completar (${e.name})`);
  }
};

const verificar = async () => {
  resultados.length = 0;
  console.log("— Check —");
  document.querySelector("#resultado").textContent = ""; // estado inicial
  check("al pedir muestra 'preparando' de inmediato", () => {
    document.querySelector("#btnPedir").click();
    const texto = document.querySelector("#estado").textContent;
    return texto.includes("⏳") || texto.includes("Preparando");
  });
  console.log("   (esperando tu promesa de 2 segundos… ⏳)");
  await new Promise((r) => setTimeout(r, 2300));
  check("la promesa entrega la pizza tras la espera", () => {
    return document.querySelector("#resultado").textContent.includes("Pizza");
  });
  const bien = resultados.filter(Boolean).length;
  const total = resultados.length;
  autocheck.textContent = `Resultado: ${bien}/${total} ✅ ${bien === total ? "¡Todo bien! 🎉" : "— ¡sigue intentando! 💪"}`;
  console.log(bien === total ? "🎉 ¡Todo bien!" : "💪 ¡Sigue intentando!");
};

btnCheck.addEventListener("click", verificar);