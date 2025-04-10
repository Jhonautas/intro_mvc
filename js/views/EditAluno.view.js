class EditAlunoView {
    constructor(form, materias) {
    this.form = form;
    this.container = form.querySelector("[data-edit-notas]")
    this.materias = materias;
    }

    render(aluno) {
        const html = this.materias.map(materia =>
        `
        <div class="row" data-materia="${materia._id}>
        <div class="input-field col s4">
        <input
        id="materia_${materia._id}"
        type="text"
        class="validade"
        />
        </div>

        <div class="input-field col s2">
        <input
            data-bimestre="0"
            id="nota_${materia._id}_0"
            type="text"
            class="validade"
            value="${aluno.notas[materia._id]?.[0]??''}"
            disabled
        />
        </div>

        <div class="input-field col s2">
        <input
            data-bimestre="1"
            id="nota_m${materia._id}_1"
            type="text"
            class="validade"
            step="0.5"
            value="${aluno.notas[materia._id]?.[1]??''}"
        />
        </div>

        <div class="input-field col s2">
        <input
            data-bimestre="2"
            id="nota_${materia._id}_2"
            type="text"
            class="validade"
            step="0.5"
            value="${aluno.notas[materia._id]?.[2]??''}"
        />
        </div>

        <div class="input-field col s2">
        <input
            data-bimestre="3"
            id="nota_${materia._id}_3"
            type="text"
            class="validade"
            step="0.5"
            value="${aluno.notas[materia._id]?.[3]??''}"
        />
        </div>
        `
    ).join("")
        this.container.innerHTML = html;
    }
}