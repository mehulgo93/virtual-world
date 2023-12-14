class Envelope {
    constructor(skeleton, width) {
        this.skeleton = skeleton;
        this.poly = this.#generatePolygon(width);
    }

    #generatePolygon(width) {
        const { p1, p2 } = this.skeleton;
        const radius = width / 2;
        const alpha = angle(subtract(p1, p2));
        const alpha_cw = alpha + Math.PI / 2;
        const alpha_ccw = alpha - Math.PI / 2;
        const points = [];
        const step = Math.PI / 10;
        for (let i = alpha_ccw; i <= alpha_cw; i += step) {
            points.push(translate(p1, i, radius));
        }
        for (let i = alpha_ccw; i <= alpha_cw; i += step) {
            points.push(translate(p2, Math.PI + i, radius));
        }

        return new Polygon(points);
    }

    draw(ctx) {
        this.poly.draw(ctx);
    }
}