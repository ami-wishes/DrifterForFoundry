export class DrifterActorSheet extends ActorSheet {

    get template() {
        return `systems/drifter/templates/actor/actor-${this.actor.type}-sheet.html`;
    }

    getData(){
        const context = super.getData();
        const actorData = this.actor.toObject(false);

        context.system = actorData.system;
        context.flags = actorData.flags;

        return context;
    }

}