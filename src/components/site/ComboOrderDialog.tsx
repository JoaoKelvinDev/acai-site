import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const WHATS_NUMBER = "5589974001661";

type Combo = {
  name: string;
  price: string;
  desc: string;
};

type Props = {
  combo: Combo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ComboOrderDialog = ({ combo, open, onOpenChange }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mode, setMode] = useState<"delivery" | "retirada">("delivery");
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [payment, setPayment] = useState<"pix" | "dinheiro" | "cartao">("pix");
  const [change, setChange] = useState("");
  const [notes, setNotes] = useState("");
  const [cupSize, setCupSize] = useState<"P" | "M" | "G">("M");

  if (!combo) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `*Pedido — ${combo.name}* (${combo.price})`,
      `*Tamanho do copo:* ${cupSize}`,
      ``,
      `*Cliente:* ${name}`,
      `*Telefone:* ${phone}`,
      ``,
      mode === "delivery"
        ? `*Modalidade:* Delivery 🛵\n*Endereço:* ${address}${
            reference ? `\n*Referência:* ${reference}` : ""
          }`
        : `*Modalidade:* Retirada na loja 🏬`,
      ``,
      `*Pagamento:* ${
        payment === "pix"
          ? "Pix"
          : payment === "cartao"
          ? "Cartão (na entrega)"
          : `Dinheiro${change ? ` — troco para R$ ${change}` : " — sem troco"}`
      }`,
    ];

    if (notes.trim()) {
      lines.push(``, `*Observações:* ${notes.trim()}`);
    }

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATS_NUMBER}?text=${message}`, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary">
            Pedir {combo.name}
          </DialogTitle>
          <DialogDescription>
            Preencha seus dados e enviaremos o pedido pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                required
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 20);
                  setPhone(value);
                }}
                placeholder="(89) 9 0000-0000"
                maxLength={11}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Como deseja receber? *</Label>
            <RadioGroup
              value={mode}
              onValueChange={(v) => setMode(v as "delivery" | "retirada")}
              className="grid grid-cols-2 gap-3"
            >
              <label
                htmlFor="delivery"
                className={`flex items-center gap-2 rounded-xl border p-3 cursor-pointer transition-all ${
                  mode === "delivery"
                    ? "border-accent bg-accent-soft"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <RadioGroupItem id="delivery" value="delivery" />
                <span className="text-sm font-medium">Delivery</span>
              </label>
              <label
                htmlFor="retirada"
                className={`flex items-center gap-2 rounded-xl border p-3 cursor-pointer transition-all ${
                  mode === "retirada"
                    ? "border-accent bg-accent-soft"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <RadioGroupItem id="retirada" value="retirada" />
                <span className="text-sm font-medium">Retirar na loja</span>
              </label>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Tamanho do copo *</Label>
            <RadioGroup
              value={cupSize}
              onValueChange={(v) => setCupSize(v as "P" | "M" | "G")}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { id: "P", label: "Pequeno (330ml, R$20.00)" },
                { id: "M", label: "Médio (400ml, R$25.00)" },
                { id: "G", label: "Grande (500ml, R$30.00)" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  htmlFor={`cup-${opt.id}`}
                  className={`flex items-center justify-center gap-2 rounded-xl border p-3 cursor-pointer transition-all ${
                    cupSize === opt.id
                      ? "border-accent bg-accent-soft"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <RadioGroupItem id={`cup-${opt.id}`} value={opt.id} />
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              ))}
            </RadioGroup>
          </div>

          {mode === "delivery" && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="address">Endereço de entrega *</Label>
                <Input
                  id="address"
                  required={mode === "delivery"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Rua, número, bairro"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reference">Ponto de referência</Label>
                <Input
                  id="reference"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="Próximo a..."
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>Forma de pagamento *</Label>
            <RadioGroup
              value={payment}
              onValueChange={(v) =>
                setPayment(v as "pix" | "dinheiro" | "cartao")
              }
              className="grid grid-cols-3 gap-3"
            >
              {[
                { id: "pix", label: "Pix" },
                { id: "dinheiro", label: "Dinheiro" },
                { id: "cartao", label: "Cartão" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  htmlFor={`pay-${opt.id}`}
                  className={`flex items-center justify-center gap-2 rounded-xl border p-3 cursor-pointer transition-all ${
                    payment === opt.id
                      ? "border-accent bg-accent-soft"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <RadioGroupItem id={`pay-${opt.id}`} value={opt.id} />
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              ))}
            </RadioGroup>
          </div>

          {payment === "dinheiro" && (
            <div className="space-y-1.5">
              <Label htmlFor="change">Troco para quanto?</Label>
              <Input
                id="change"
                value={change}
                onChange={(e) => setChange(e.target.value)}
                placeholder="Ex: 100,00 (deixe vazio se não precisa)"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="notes">Observações</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: complementos preferidos, sabor do refri..."
              rows={3}
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Enviar pelo WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};