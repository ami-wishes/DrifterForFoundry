
import {DrifterActor} from "./documents/DrifterActor.mjs";
import {DrifterActorSheet} from "./sheets/actor-player-sheet.mjs";


Hooks.once("init", async function(){

    CONFIG.Actor.documentClass = DrifterActor;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("drifter", DrifterActorSheet, { makeDefault: true });

});