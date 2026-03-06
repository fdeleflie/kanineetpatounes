import React from 'react';
import { motion } from 'motion/react';
import { Cat, ShieldCheck, Heart, MessageCircle, AlertTriangle } from 'lucide-react';

export default function Boarding() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 sm:px-0"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full text-orange-600 mb-4">
          <Cat className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Pension Féline</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Une véritable colonie de vacances pour votre chat, en toute sécurité.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center">
            <Heart className="w-6 h-6 text-red-500 mr-3" />
            Un séjour tout confort
          </h2>
          <ul className="space-y-6">
            <li className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-4">
                <ShieldCheck className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">Box Individuels</h3>
                <p className="text-stone-600">Chaque chat dispose de son propre espace sécurisé et confortable.</p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-4">
                <Cat className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">Espaces de Jeux</h3>
                <p className="text-stone-600">Des zones aménagées pour grimper, jouer et se dépenser.</p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-4">
                <MessageCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">Nouvelles Régulières</h3>
                <p className="text-stone-600">Recevez des photos et des nouvelles de votre compagnon pendant votre absence.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Information Importante</h3>
                <p className="text-yellow-700">
                  Pensez à réserver à l'avance pour les périodes de vacances scolaires ! Nos places sont limitées pour garantir le confort de chaque pensionnaire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-900 mb-4">Conditions d'admission</h3>
            <ul className="list-disc list-inside space-y-2 text-stone-600">
              <li>Identification par puce ou tatouage obligatoire</li>
              <li>Vaccins à jour (Typhus, Coryza, Leucose)</li>
              <li>Traitement antiparasitaire (puces/tiques) récent</li>
              <li>Carnet de santé à fournir à l'arrivée</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
