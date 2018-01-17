import { Container } from "inversify";
import { helpers } from "inversify-vanillajs-helpers";
import { initializeApp } from 'firebase'
import { ItemsRepository } from './repositories/ItemsRepository'
import { DiscountRepository } from './repositories/DiscountRepository'
import 'reflect-metadata'

export const container = new Container()

container.bind('APP').toConstantValue(initializeApp({
    apiKey: "AIzaSyBwRXUv15Ih-BJ_E-s9dyy7RqahrXKGrc0",
    authDomain: "game-points-b451c.firebaseapp.com",
    databaseURL: "https://game-points-b451c.firebaseio.com",
    projectId: "game-points-b451c",
    storageBucket: "game-points-b451c.appspot.com",
    messagingSenderId: "760880305858"
}))
container.bind('DATABASE').toFactory(context => context.container.get('APP').database())

container.bind('ITEMS_REPOSITORY').to(ItemsRepository)
container.bind('DISCOUNT_REPOSITORY').to(DiscountRepository)

helpers.annotate(ItemsRepository, ['DATABASE'])
helpers.annotate(DiscountRepository, ['DATABASE'])
