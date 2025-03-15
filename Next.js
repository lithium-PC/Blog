import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  { id: 1, title: "Guía de Ensamblaje de PC", content: "Aquí puedes escribir sobre cómo ensamblar una PC..." },
  { id: 2, title: "Las Mejores Tarjetas Gráficas de 2025", content: "Aquí puedes escribir sobre tarjetas gráficas..." },
  { id: 3, title: "Cómo Optimizar Windows para Gaming", content: "Aquí puedes escribir sobre optimización de Windows..." },
];

export default function BlogPC() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        LithiumPC Blog
      </motion.h1>
      
      <div className="grid gap-4">
        {articles.map((article) => (
          <motion.div 
            key={article.id} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="cursor-pointer" onClick={() => setSelectedArticle(article)}>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{article.title}</h2>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {selectedArticle && (
        <motion.div 
          className="mt-6 p-6 border rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
          <p>{selectedArticle.content}</p>
          <Button className="mt-4" onClick={() => setSelectedArticle(null)}>Volver</Button>
        </motion.div>
      )}
    </div>
  );
}
